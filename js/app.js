/*
 * Running init() function on page load. Do not change it to $(init); because
 * it would bind init function object and we would be not able to overwrite it with Java.
 */
$(function() {
    init();
});

/**
 * Initializes state of the application based on data
 * provided by preferences service.
 *
 * This method must be called by wrapper application
 * once preference service is injected to the page.
 *
 * @uses app.widgets.console.AreaView
 */
function init() {

    app.eventBus = $.extend({}, Backbone.Events);

    /**
     * AreaView instance, root object of application.
     * @type {app.widgets.console.AreaView }
     */
    app.areaView = new app.widgets.console.AreaView({el: $('#a1'), model: new app.widgets.console.AreaModel()});

    var prefs = app.getService("prefs");

    if( !prefs.isFull() ) {
        app.areaView._script_split();
    }

    if( prefs.isSeparate() ) {
        app.areaView._script_separate();
    }
};

// Extensions for JS

if( !Function.prototype.bind ) {
    Function.prototype.bind = function(ctx) {
        var self = this;
        return function() {
            self.apply(ctx, arguments);
        }
    };
}

/**
 * @class JSON
 * @singleton
 * Built-in class for handling JSON.
 */

/**
 * Original JSON.stringify function
 * @type {function}
 * @private
 */
JSON._stringify = JSON.stringify;

/**
 * Overriden JSON.stringify function that avoids infinte reference circles.
 * Params as in original JSON.stringify function.
 * @returns {String} Serialized JSON structure
 */
JSON.stringify = function(o, replacer, space) {
    var cache = [];
    var res = JSON._stringify(o, replacer || function(key, value) {
        if( typeof value === 'object' && value !== null ) {
            if( cache.indexOf(value) !== -1 ) {
                return '[#ref]';
            }
            cache.push(value);
        }
        return value;
    }, space);
    cache = null;
    return res;
}

// Main app structure

/**
 * @class app
 * @singleton
 * Root application object
 * @requires jquery
 * @requires rangyinputs-jquery
 * @requires moment
 * @requires underscore
 * @requires backbone
 * @requires handlebars
 * @requires list
 * @requires sprintf
 * @uses app.config
 */
var app = {};

/**
 * Finds and returns service requested by name
 * @param {String} serviceName Requested service name
 * @returns {Object} Service
 */
app.getService = function(serviceName) {
    return app.services[serviceName];
};

/**
 * @class
 * @singleton
 * Services namespace.
 *
 * Services can be get by getService() method.
 */
app.services = {};

/**
 * @class
 * @singleton
 * Namespace for service implementations
 */
app.services.impl = {};

/**
 * @class
 * @singleton
 * Namespace for common classes.
 */
app.common = {
    models: {},
    data  : {
        flight : {},
        hotel  : {},
        vehicle: {},
        dto    : {}
    },
    mixins: {},
    views : {}
};

/**
 * @class
 * @singleton
 * Namespace for widgets.
 *
 * Each widget should have its own subnamespace.
 */
app.widgets = {};

/**
 * @class
 * @singleton
 * Main widget containg application skeleton.
 */
app.widgets.console = {
    views : {},
    models: {}
};

/**
 * @class
 * @singleton
 * Basic continer widget namespace.
 */
app.widgets.container = {};

/**
 * @class
 * @singleton
 * Namespace for response widgets, like CPA, HOT, etc.
 */
app.responses = {};/**
 * @class
 * @singleton
 * Configuration options
 */
app.config = {};

/**
 * @cfg {String}
 * Templates root path
 */
app.config.templatesUrl = 'templates/';

/**
 * @cfg {String}
 * Plugins root path
 */
app.config.pluginsUrl = 'plugins/';

/**
 * @cfg {Number}
 * Logging level
 */
app.config.loggingLevel = 800;

/**
 * @cfg {boolean}
 * Flag indicating if time measurements should be turned on or off
 */
app.config.timer = true;

/**
 * @cfg {String}
 * ATH currently used. Available for mobile devices.
 */
app.config.ath = null;
/**
 * Area changer plugin ships functionality of area changer and indicator.
 * @singleton
 * @class
 */
app.widgets.areaChanger = {
    views: {}
};
/**
 * @class
 * @singleton
 * Logging service
 */
app.services.logger = {};

/**
 * Converting arguments object to Array object
 * @returns {Array} Arguments converted to Array object
 * @private
 */
app.services.logger._convertArgumentsToArray = function() {
    return Array.prototype.slice.call(arguments, 0);
};

/**
 * Function for logging messages. Can be overwritten by Java.
 * @param {Number} level Logging level (as in Java)
 * @param {*} msg Message
 */
app.services.logger.log = function(level, msg) {
    console.log(msg);
};

/**
 * Log message building and logging function.
 * @param {Number} level Level of logging
 * @param {Array} msg Array of messages
 * @private
 */
app.services.logger._log = function(level, msg) {
    if( level >= app.config.loggingLevel ) {
        var self = this;
        setTimeout(function() {
            self.log(level, [
                {
                    level    : level,
                    timestamp: new Date().getTime()
                }
            ].concat(msg));
        }, 0);
    }
};

/**
 * Logging level mapping: integer to name.
 * @type {Object}
 * @private
 */
app.services.logger._loggingLevels = {
    300 : 'finest',
    400 : 'finer',
    500 : 'fine',
    700 : 'config',
    800 : 'info',
    900 : 'warning',
    1000: 'severe'
};

/**
 * Logs message with SEVERE level. Used as window.onerror handler.
 * @param {*} msg Log message
 */
app.services.logger.severe = function(msg) {
    app.services.logger._log(1000, this._convertArgumentsToArray.apply(this, arguments));
};

window.onerror = function() {
    app.services.logger.severe.apply(app.services.logger, arguments);
};

/**
 * Logs message with WARNING level
 * @param {*} msg Log message
 */
app.services.logger.warning = function(msg) {
    app.services.logger._log(900, this._convertArgumentsToArray.apply(this, arguments));
};

/**
 * Logs message with INFO level
 * @param {*} msg Log message
 */
app.services.logger.info = function(msg) {
    app.services.logger._log(800, this._convertArgumentsToArray.apply(this, arguments));
};

/**
 * Logs message with CONFIG level
 * @param {*} msg Log message
 */
app.services.logger.config = function(msg) {
    app.services.logger._log(700, this._convertArgumentsToArray.apply(this, arguments));
};

/**
 * Logs message with FINE level
 * @param {*} msg Log message
 */
app.services.logger.fine = function(msg) {
    app.services.logger._log(500, this._convertArgumentsToArray.apply(this, arguments));
};

/**
 * Logs message with FINER level
 * @param {*} msg Log message
 */
app.services.logger.finer = function(msg) {
    app.services.logger._log(400, this._convertArgumentsToArray.apply(this, arguments));
};

/**
 * Logs message with FINEST level
 * @param {*} msg Log message
 */
app.services.logger.finest = function(msg) {
    app.services.logger._log(300, this._convertArgumentsToArray.apply(this, arguments));
};

/**
 * Disables any logging in JS (constantly)
 */
app.services.logger.disableLogging = function() {
    this.log = function() {
    };
    this._log = function() {
    };
};
/**
 * @class
 * @singleton
 * Service for handling AOP functionalities.
 */
app.services.aop = {};

/**
 * Adds AOP to Backbone class.
 * @param {Object} cls Backbone class object.
 *
 * AOP is realized by registering handlers for functions in given class.
 * Ex. cls.__aop.addHandler('before', 'functionName', handlerFunction);
 * adds handler to be used BEFORE functionName() function is called.
 *
 * Handler is defined as follows: handlerFunction = function(ctxObject, funcName, args, res){}
 * where ctxObject is object with aoped method, funcName is its name,
 * args is array with arguments passed to function and res is result of function
 * (available in "after" handlers).
 *
 * There are two aopPoints for binding handlers: after and before.
 *
 * There is a wildcard for using handler with all functions: *.
 *
 *      @example
 *      cls.__aop.addHandler('before', '*', function(obj, funcName, args) {
 *          app.getService('logger')[level(funcName)]('Function start', funcName);
 *      });
 *
 */
app.services.aop.addAspectParadigm = function(cls) {
    return;
    if( cls.__aop ) {
        return;
    }

    var extend = cls.extend;

    cls.__aop = {
        addHandler: function(aopPoint, aopName, aopHandler) {
            if( aopName instanceof RegExp ) {
                aopName = aopName.toString();
                aopName = aopName.substr(1, aopName.length - 2);
            }
            if( typeof cls.__aop[aopPoint] == 'undefined' ) {
                cls.__aop[aopPoint] = {};
            }
            if( !Array.isArray(cls.__aop[aopPoint][aopName]) ) {
                cls.__aop[aopPoint][aopName] = [];
            }
            cls.__aop[aopPoint][aopName].push(aopHandler);
        },
        before    : {},
        after     : {}
    };

    function callAspectFunctions(aopPoint, aopName, ctxObject, funcName, args, res) {
        var aopNames = cls.__aop[aopPoint];

        if( typeof aopNames != 'undefined' ) {
            var handlers = [];

            for( var aopRegex in aopNames ) {
                if( aopName.match(aopRegex) ) {
                    handlers.push(aopNames[aopRegex]);
                }
            }

            for( var i in handlers ) {
                for( var j in handlers[i] ) {
                    handlers[i][j].apply(this, [ctxObject, funcName, args, res]);
                }
            }
        }
    }

    cls.extend = function(originalObject) {
        var aopObject = {};
        for( var funcName in originalObject ) {
            if( typeof originalObject[funcName] == 'function'
                && typeof originalObject[funcName].extend != 'function' ) {
                aopObject[funcName] = (function(ctxObject, funcName) {
                    return function() {
                        callAspectFunctions.apply(this, ['before', funcName, ctxObject, funcName, arguments]);
                        var res = ctxObject[funcName].apply(this, arguments);
                        callAspectFunctions.apply(this, ['after', funcName, ctxObject, funcName, arguments, res]);
                        return res;
                    }
                })(originalObject, funcName);
            } else {
                aopObject[funcName] = originalObject[funcName];
            }
        }

        var args = Array.prototype.slice.call(arguments, 1);
        args.splice(0, 1, aopObject);
        return extend.apply(this, args);
    }
};

/**
 * Adds AOP to Backbone class and adds handlers for logging function start and end.
 * @param {Object} cls Backbone class object.
 */
app.services.aop.addAspectLogging = function(cls) {
    return;
    this.addAspectParadigm(cls);

    function level(funcName) {
        return funcName[0] != '_' ? 'fine' : funcName[1] != '_' ? 'finer' : 'finest';
    }

    cls.__aop.addHandler('before', /.*/, function(obj, funcName, args) {
        app.getService('logger')[level(funcName)]('Function start', funcName);
    });

    cls.__aop.addHandler('after', /.*/, function(obj, funcName, args, res) {
        app.getService('logger')[level(funcName)]('Function end', funcName);
    });
};/**
 * @class
 * @singleton
 * Service handling objects and classes in Dynamo
 */
app.services.objects = {}

/**
 * Creates widget by given options.
 *
 * options.className is used to determine widgets class name. If not found, app.AbstractView is used.
 *
 * @param {struct.WidgetDescriptor} options Widget description used in its creation
 * @returns {app.AbstractView} Widget instance
 */
app.services.objects.widget = function(options) {
    options = this.normalizeDescriptor(options);
    options.defaultClassName = 'app.AbstractView';
    return this.createObject(options, options);
}

/**
 * Creates model by given data and options.
 *
 * options.className is used to determine widgets class name. If not found, app.AbstractModel is used.
 *
 * @param {Object} data Data for model
 * @param {struct.ModelDescriptor} options Model description used in its creation
 * @returns {app.AbstractModel} Model instance
 */
app.services.objects.model = function(data, options) {
    data = data || {};
    options = this.normalizeDescriptor(options);

    options.defaultClassName = 'app.AbstractModel';
    return this.createObject(options, data, options);
}

app.services.objects.collection = function(datas, options) {
    datas = datas || [];
    options = this.normalizeDescriptor(options);

    options.defaultClassName = 'app.AbstractCollection';
    return this.createObject(options, datas, options);
}

app.services.objects.createObject = function(descriptor, a, b, c, d, e, f, g, h, i, j) {
    descriptor = this.normalizeDescriptor(descriptor);
    var defClsName = descriptor.defaultClassName || 'app.AbstractModel';
    var cls = this.getObjectByPath(descriptor.className || defClsName) || this.getObjectByPath(defClsName);

    if( Array.isArray(descriptor.mixins) ) {
        var mixin;
        descriptor.mixins.forEach(function(mixinName) {
            if( mixin = this.getObjectByPath(mixinName) ) {
                cls = cls.extend(mixin);
            }
        }, this);
    }

    return new cls(a, b, c, d, e, f, g, h, i, j);
}

app.services.objects.getObjectByPath = function(path, space) {
    return this.getObjectWithEnvironmentByPath(path, space).object;
}

app.services.objects.getObjectWithEnvironmentByPath = function(path, space) {
    var current = space || window;

    var ret = {
        object: undefined,
        parent: null,
        name  : ''
    };

    if( path === '' ) {
        ret.object = current;
    } else if( path !== undefined ) {
        var next, match;

        while( path.length > 0 ) {

            if( !(current instanceof Object) ) {
                ret.object = undefined;
                ret.parent = null;
                ret.name = '';
                break;
            }

            // searching for '[abc].xxx' format
            match = path.match(/^\[(.*?)\]\.?(.*)$/);

            // searching for 'abc.xxx' format
            if( !match ) {
                match = path.match(/^([^.]*)\.?(.*)$/);
            }

            next = match[1];
            path = match[2];

            ret.parent = current;
            ret.name = next;

            if( current instanceof Backbone.Model ) {
                current = current.get(next);
            } else {
                current = current[next];
            }

            ret.object = current;
        }
    }

    return ret;
}

app.services.objects.setObjectByPath = function(path, value, space) {
    var objEnv = this.getObjectWithEnvironmentByPath(path, space);

    if( objEnv.parent instanceof Backbone.Model ) {
        objEnv.parent.set(objEnv.name, value);
    } else {
        objEnv.parent[objEnv.name] = value;
    }

    return value;
}

app.services.objects.normalizeDescriptor = function(descriptor) {
    descriptor = descriptor || {};

    if( typeof descriptor == 'string' ) {
        descriptor = {
            className: descriptor
        }
    }

    return descriptor;
};/**
 * @class
 * @singleton
 * Additional methods for managing DOM.
 */
app.services.dom = {};

/**
 * Creates HTML element from string
 * @param {String|jQuery} el HTML string (or element) to be used as element
 * @returns {jQuery} HTML element
 */
app.services.dom.createElement = function(el) {
    var o = $(el);
    return o[0].nodeName === '#text' ? $(o[1]) : $(o[0]);
};
/**
 * @class
 * @singleton
 * Service for dealing with random and serial numbers
 */
app.services.random = {}

app.services.random.random = function() {
    return Math.random();
};

app.services.random._randoms = {};

app.services.random.newRandom = function(name) {
    name = name || '';
    return this._randoms[name] = this.random();
};

app.services.random.getRandom = function(name) {
    name = name || '';
    return this._randoms[name];
};

app.services.random._randomIds = {};

app.services.random.newRandomId = function(name) {
    name = name || '';
    return this._randomIds[name] = (name + '_' + this.random()).replace(/[^0-9a-zA-Z_]/, '_');
};

app.services.random.getRandomId = function(name) {
    name = name || '';
    return this._randomIds[name];
};
/**
 * @constructor
 * Service for dealing with templates
 * @requires app.test
 */
app.services.impl.Templates = function() {

    /**
     * Creates template by name
     * @param {String} name Template name
     * @returns {Function} Template function
     */
    this.createTemplateByName = function(name) {
        return this.createTemplate(this.loadTemplate(name));
    };

    /**
     * Loads template string by given name
     * @param {String} name Template name
     * @returns {string} Template string
     */
    this.loadTemplate = function(name) {
        var url;
        var splitted = name.split(':');

        if( splitted.length < 2 ) {
            splitted[1] = splitted[0];
            splitted[0] = 'core';
        }

        url = app.config.pluginsUrl + splitted[0] + '/templates/' + splitted[1] + '.html';

        var ret = $.ajax({
            url  : url,
            type : "GET",
            async: false
        });

        return ret.responseText;
    };

    /**
     * Compiles template string to template function. Template function can be used with context to render HTML.
     * @param {String} tmplStr Template string
     * @returns {Function} Template function
     */
    this.createTemplate = function(tmplStr) {
        tmplStr = tmplStr.replace(/\r/g, '');
        var ret = Handlebars.compile(tmplStr);
        return ret;
    };

    Handlebars.registerPartial('text', '<input type="text" id="{{id}}" value="{{value}}" size="{{length}}" maxlength="{{length}}" style="width: {{width}}"/>');

    Handlebars.registerPartial('passwd', '<input type="password" id="{{id}}" value="" size="{{length}}" maxlength="{{length}}" style="width: {{width}}" />');

    Handlebars.registerHelper('line-by-line', function(text, options) {
        var result = '';
        text = typeof text == 'string' ? text : '';
        text.split(/\n/).forEach(function(line) {
            result += options.fn(new Handlebars.SafeString(_preserveSpaces(line)));
        });
        return result;
    });

    Handlebars.registerHelper('slice', function(arr, from, to, options) {
        arr = arr || [];

        if( typeof from != 'number' ) {
            to = from;
            from = 0;
        }

        if( typeof to != 'number' ) {
            options = to;
            to = arr.length;
        }

        var result = '';

        arr.slice(from, to).forEach(function(item) {
            result += options.fn(item);
        }, this);

        return result;
    });

    Handlebars.registerHelper('pad', function(len, text) {
        if( typeof text != 'string' ) {
            text = '';
        }
        text = text.substr(0, len);
        return sprintf('%' + len + 's', text.substr(0, len));
    });

    Handlebars.registerHelper('pad-nbsp', function(len, text) {
        if( typeof text != 'string' ) {
            text = '';
        }
        text = text.substr(0, len);
        for( var i = text.length; i < len; i++ ) {
            text = ' ' + text;
        }
        text = _preserveSpaces(text);
        return new Handlebars.SafeString(text);
    });

    Handlebars.registerHelper('printf', function() {
        return sprintf.apply(this, arguments);
    });

    Handlebars.registerHelper('substr', function(text, start, length) {
        if( typeof length == 'undefined' ) {
            start = 0;
            length = start;
        }

        return text.substr(start, length);
    });

    Handlebars.registerHelper('trim-leading-zeros', function(text) {
        if( typeof text != 'string' ) {
            text = '';
        }

        return text.split('.').map(function(item) {
            return item.replace(/^0*(.*)/g, '$1');
        }).join('.') || '0';
    });

    function _preserveSpaces(text) {
        return text
            .replace(/[ ]{2}/g, '&nbsp; ')
            .replace(/\b /g, '&nbsp;')
            .replace(/ \b/g, '&nbsp;')
            .replace(/^ /g, '&nbsp;')
            .replace(/ $/g, '&nbsp;');
    }

    Handlebars.registerHelper('pre', function(options) {
        var res = options.fn(this)
            .replace(/\r/g, '')
            .split(/[\n]/)
            .map(function(item) {
                return item
                    .replace(/^\s+/, '')
                    .replace(/\s+$/, '');
            })
            .filter(function(item) {
                return !!item;
            })
            .join('');

        res = _preserveSpaces(res);

        return new Handlebars.SafeString(res);
    });

    Handlebars.registerHelper('nbsp', function(options) {
        return new Handlebars.SafeString(_preserveSpaces(options.fn(this)));
    });

    Handlebars.registerHelper('uniq', function(collection, options) {
        var values = collection.map(function(item) {
            return options.fn(item);
        });

        return values.filter(function(item, idx) {
            return values.indexOf(item, idx + 1) < 0;
        }).join('/');
    });

    Handlebars.registerHelper('new-random', function(name) {
        return app.getService('random').newRandomId(name);
    });

    Handlebars.registerHelper('get-random', function(name) {
        return app.getService('random').getRandomId(name);
    });

    Handlebars.registerHelper('each-or-once', function(o, options) {
        return _.foldl(Array.isArray(o) ? o : [o], function(a, b) {
            return a + options.fn(b.attributes || b);
        }, '');
    });
};

/**
 * app.services.impl.Templates service instance to be used by application
 * @class
 * @singleton
 * @requires app.services.impl.Templates
 */
app.services.templates = new app.services.impl.Templates();
/**
 * @class
 * @abstract
 * @extends Backbone.View
 * Abstract base class for View classes.
 * Other classes should extend this class, not Backbone's one.
 * This class can provide additional, abstract functionalities for inherited classes.
 *
 * @requires app.services.aop
 */
app.AbstractView = Backbone.View.extend({

    /**
     * DOM events bindings.
     * @type {Object}
     */
    events: {},

    /**
     * Descriptor of default model object to be used by widget.
     *
     * It will be NOT used if #model is set to app.AbstractModel instance.
     *
     * @type {struct.ModelDescriptor}
     */
    modelDescriptor: null,

    /**
     * @type {app.AbstractModel}
     *
     * Model object for view/widget. Should be retrieved by getModel() method.
     * See: #modelDescriptor
     */
    model: null,

    /**
     * Returns model for view/widget.
     * If JS object is set to model attribute, it is enveloped by
     * app.AbstractModel class object.
     * @returns {app.AbstractModel} Model object
     */
    getModel: function() {
        if( !(this.model instanceof Backbone.Model) ) {
            this.model = app.getService('objects').model(this.model || {}, this.modelDescriptor);
        }
        return this.model;
    },

    hasCollection: function() {
        return this.collection || this.collectionDescriptor;
    },

    getCollection: function() {
        if( !(this.collection instanceof Backbone.Collection) ) {
            this.collection = app.getService('objects').collection(this.collection || [], this.collectionDescriptor);
        }
        return this.collection;
    },

    /**
     * @type {String|Function(object):string} [template]
     *
     * Template name or function to be used by view/widget.
     * If string provided, template is loaded from disk and
     * compiled to template function. Template function
     * should take one argument (data) and return string to be
     * rendered.
     *
     * Defaults to template function. It can be overwritten with
     * template name or other template function. See: #template property
     */
    template: function(data) {
        return app.getService('templates').createTemplate(this.format)(data);
    },

    format: '{{value}}',

    /**
     * @type {String}
     * CSS class name for widget. Multiple classes can be separated with spaces.
     */
    cssClass: '',

    /**
     * @type {Object}
     * CSS styles for widget.
     */
    cssStyle: null,

    /**
     * @type {String}
     * Widgets ID. Should be unique. Autogenerated by default.
     */
    widgetId: null,

    /**
     * Initializes and renders widget.
     *
     * It runs initializer methods. They are called with
     * the same options. For more see: #_runInitializers
     *
     * When options are passed they can replace (or merge)
     * object attributes, so widgets can be configured with
     * standard attributes by default and reconfigured in runtime.
     *
     * @constructor
     * @param {struct.WidgetOptions} [options={}] Widget configuration options.
     */
    initialize: function(options) {
        options = options || {};
        Backbone.View.prototype.initialize.call(this, options);
        this._runInitializers(options);
        this._registerEventHandlers();
        this.render();
    },

    /**
     * Runs initializer methods.
     *
     * Initialize method is the one matching /^initialize.+/ pattern.
     * There is no certain execution order.
     *
     * @param {struct.WidgetOptions} options Widget configuration options.
     * @private
     */
    _runInitializers: function(options) {
        for( var funcName in this ) {
            if( typeof this[funcName] == 'function' ) {
                if( funcName.match(/^initialize.+/) ) {
                    this[funcName](options);
                }
            }
        }
    },

    _registerEventHandlers: function() {
        var match;
        for( var funcName in this ) {
            if( typeof this[funcName] == 'function' ) {
                if( match = funcName.match(/^on([A-Z].+)/) ) {
                    var eventName = match[1]
                        .replace(/([a-z])([A-Z])/, function(o, a1, a2) {
                            return a1 + '-' + a2;
                        })
                        .toLowerCase();
                    this.listenTo(app.eventBus, eventName, this[funcName]);
                }
            }
        }
    },

    /**
     * Default widget initializer.
     *
     * @param {struct.WidgetOptions} options Configuration options.
     */
    initializeWidget: function(options) {
        this.initAttribute('cssStyle', options, {}, { merge: true });
        this.initAttribute('cssClass', options, '');
        this.initAttribute('template', options);
        this.initAttribute('format', options);
        this.initAttribute('widgetId', options, app.getService('random').newRandomId());

        this.initAttribute('modelDescriptor', options, {
            className: 'app.AbstractModel'
        }, {
            merge: true,
            deep : true
        });

        this.initAttribute('collectionDescriptor', options, {
            className: 'app.AbstractCollection'
        }, {
            merge: true,
            deep : true
        });
    },

    /**
     * Initializes widget attribute.
     *
     * It takes attribute name, options object and default value, and
     * it sets value of attribute searching for value in order:
     * options, widget, default.
     *
     *      @example
     *      this.initAttribute('cssStyle', options, {}, { merge: true })
     *
     * @param {String} name Attribute name
     * @param {struct.WidgetOptions} [options={}] Options object
     * @param {*} [def=undefined] Default value
     * @param {struct.WidgetAttributeInitializationConfig} [cfg={}] Configuration for attribute init
     */
    initAttribute: function(name, options, def, cfg) {
        cfg = $.extend({
            merge    : false,
            deep     : false,
            propagate: false
        }, cfg);

        options = options || {};

        if( cfg.merge ) {
            this[name] = $.extend(cfg.deep === true, {}, def, this[name], options[name]);
        } else {
            this[name] = options[name] || this[name] || def;
        }

        if( cfg.propagate ) {
            this.getModel().attributes[name] = this[name];
        }
    },

    /**
     * Renders view/widget.
     * It sets css class and style kept by widget in attributes.
     */
    render: function() {
        this._renderTemplate();
        this.$el.addClass(this.cssClass);
        this.$el.css(this.cssStyle);
        this.$el.attr('widget-id', this.widgetId);
    },

    /**
     * Default rendering implementation.
     * @private
     */
    _renderTemplate: function() {
        this._normalizeTemplate();
        var data = this._getDataForTemplate();
        var html = this.template(data);
        this.$el.html(html);
    },

    _getDataForTemplate: function() {
        var model = this.getModel();

        var data = $.extend({
            collection: this.getCollection().serialize()
        }, model.serialize());

        return data;
    },

    /**
     * Normalizes template to template function(data:object):string
     * @private
     */
    _normalizeTemplate: function() {
        if( typeof this.template == 'string' ) {
            this.template = app.getService('templates').createTemplateByName(this.template);
        }
    },

    /**
     * Delegates events stored in #events.
     *
     * This function is extending Backbone.View#delegateEvents method.
     * Before delegating them, it searches for dn-action attribute in #$el
     * and adds event binding for element.
     *
     *      @example
     *      <div dn-action="show"></div>
     *      // ... will add following binding to events map:
     *      'click .uniqueClass': 'show'
     */
    delegateEvents: function() {
        var self = this;
        this.$('*[dn-action]').each(function() {
            var o = $(this);
            self.events = $.extend({}, self.events);

            var actions = self._getDnActions(o.attr('dn-action'));

            actions.forEach(function(action) {
                var idCls = 'dn-action-' + app.getService('random').newRandomId();

                this.events[action.event + ' .' + idCls] = action.action;

                o.addClass(idCls);
                o.attr('dn-action', null);
            }, self);
        });

        Backbone.View.prototype.delegateEvents.apply(this, arguments);
    },

    // tap=a1,a2 click=b1
    // tap=a1,a2 b1
    // b1
    _getDnActions : function(actionsDescriptor) {
        var ret = [];
        var options = actionsDescriptor.split(/\s+/);

        options.forEach(function(action) {
            var splitted = action.split('=');
            var event, actions;

            if( !splitted[1] ) {
                actions = splitted[0];
                event = 'click'
            } else {
                actions = splitted[1];
                event = splitted[0];
            }

            actions.split(',').forEach(function(action) {
                if( action ) {
                    ret.push({
                        event : event,
                        action: action
                    });
                }
            }, this);
        }, this);

        return ret;
    },

    get: function() {
        var model = this.getModel();
        return model.get.apply(model, arguments);
    },

    set: function() {
        var model = this.getModel();
        return model.set.apply(model, arguments);
    }
});

app.getService('aop').addAspectLogging(app.AbstractView);
/**
 * @class
 * @extends app.AbstractView
 * Widget for changing areas
 */
app.widgets.areaChanger.views.AreaChanger = app.AbstractView.extend({

    /**
     * @event area-selected
     * Fired when area button is clicked.
     * @param {String} areaName Selected area name
     * @param {boolean} currentArea Flag telling if selected area is current area
     */

    /**
     * Binded DOM events
     */
    events: {
        'click .change-button': '_changeArea',
        'click .area-changer' : '_stopPropagation'
    },

    /**
     * Template for widget
     */
    template: app.getService('templates').createTemplateByName('areaChanger:AreaChanger'),

    /**
     * @constructor
     * Listens to area name changes.
     */
    initialize: function() {
        this.listenTo(this.getModel(), 'change', this._modelChangeHandler);
        this.render();
    },

    /**
     * Renders widget
     */
    render: function() {
        this.$el.html(this.template());
        this.$el.hide();
        this._setActiveArea(this.getModel().getActiveArea());
    },

    /**
     * Handler for area change event
     * @param {app.widgets.console.AreaModel} model
     * @param {String} value
     * @param {Object} options
     */
    _modelChangeHandler: function(model, value, options) {
        this._setActiveArea(model.getActiveArea());
    },

    /**
     * Sets active area to view.
     * @param {String} name Area name
     * @private
     */
    _setActiveArea: function(name) {
        //name = name.toUpperCase();
        this.$('.change-button').removeClass('pushed');
        this.$('.change-button[area-name="' + name + '"]').addClass('pushed');
    },

    /**
     * Change area button click event handler
     * @param {Event} e Click event
     * @private
     * @fires area-selected
     */
    _changeArea: function(e) {
        var o = $(e.target);
        this.trigger('area-selected', o.attr('area-name'), o.hasClass("pushed"));
    },

    /**
     * Prevents propagation of event (so changer is not hidden by clicking on it)
     * @param {Event} e Any event
     * @private
     */
    _stopPropagation: function(e) {
        e.stopPropagation();
    }
});
/**
 * @class
 * @extends app.AbstractView
 * @uses app.widgets.areaChanger.views.AreaChanger
 * Widget indicating current working area
 */
app.widgets.areaChanger.views.AreaIndicator = app.AbstractView.extend({

    /**
     * Binded DOM events
     */
    events: {
        'click .area-indicator': '_toggleChanger'
    },

    /**
     * Template for widget
     */
    template: app.getService('templates').createTemplateByName('areaChanger:AreaIndicator'),

    /**
     * @constructor
     * Listens to area name changes.
     */
    initialize: function() {
        this.listenTo(this.getModel(), 'change', this._modelChangeHandler);
        this._listenToDocument();
        this.render();
    },

    /**
     * Renders widget
     */
    render: function() {
        this.$el.html(this.template());
        this._setActiveArea(this.getModel().getActiveArea());
    },

    /**
     * Binds event listeners to document
     * @private
     */
    _listenToDocument: function() {
        var self = this;
        $(document).click(function(e) {
            self._hideChanger();
        });
    },

    /**
     * Handler for area change event
     * @param {app.widgets.console.AreaModel} model
     * @param {String} value
     * @param {Object} options
     */
    _modelChangeHandler: function(model, value, options) {
        this._setActiveArea(model.getActiveArea());
        this._hideChanger();
    },

    /**
     * Sets active area to view.
     * @param {String} name Area name
     * @private
     */
    _setActiveArea: function(name) {
        name = name.toUpperCase();
        this.$('.current-area').html(name);
    },

    /**
     * Toggles visibility of area changer
     * @private
     */
    _toggleChanger: function(e) {
        if( this._changerEnvelope && this._changerEnvelope.is(':visible') ) {
            this._hideChanger();
        } else {
            this._showChanger();
        }

        e.stopPropagation();
    },

    /**
     * Initializes AreaChangerView and its envelope
     * @private
     */
    _initChanger: function() {
        if( !this._changer || !this._changerEnvelope ) {
            var offset = this.$('.area-indicator').offset();
            var bottom = 5 + $(document).height() - offset.top;

            this._changerEnvelope = app.getService('dom').createElement('<div></div>')
                .appendTo(document.body)
                .css('position', 'absolute')
                .css('left', offset.left)
                .css('bottom', bottom);

            this._changer = new app.widgets.areaChanger.views.AreaChanger({el: this._changerEnvelope, model: this.getModel()});
            this.listenTo(this._changer, 'area-selected', this._onAreaSelected);
        }
    },

    onAreaSelected: function(areaName, isCurrentArea) {
        if( !isCurrentArea ) {
            app.areaView._script_changeArea(areaName);
        } else {
            this._hideChanger();
        }
    },

    _changerEnvelope: null,

    /**
     * Shows area changer
     * @private
     */
    _showChanger: function() {
        this._initChanger();
        this._changerEnvelope.show();
        this.$('.area-indicator').addClass('pushed');
    },

    /**
     * Hides area changer
     * @private
     */
    _hideChanger: function() {
        if( !this._isChangerVisible() ) {
            return;
        }
        this._initChanger();
        this._changerEnvelope.hide();
        this.$('.area-indicator').removeClass('pushed');
    },

    /**
     * Indicates if area changer is visible
     * @returns {Boolean} Area changer visibility indicator
     * @private
     */
    _isChangerVisible: function() {
        return this._changer && this._changer.$el.is(':visible');
    }
});
/**
 * @class
 * @singleton
 * Plugin for box group and box handling.
 *
 * Boxes are used in sidepanel to present additional data for user.
 */
app.widgets.boxes = {
    views: {}
};/**
 * @class
 * @abstract
 * @extends Backbone.Model
 * Abstract base class for Model classes.
 * Other classes should extend this class, not Backbone's one.
 * This class can provide additional, abstract functionalities for inherited classes.
 *
 * It should be handled BACKBONE's way! (set(), get(), defaults) It differs from widget handling.
 *
 * @requires app.services.aop
 */
app.AbstractModel = Backbone.Model.extend({

    /**
     * @constructor
     * @inheritDoc
     * @param {Object} data Data for backbone's model object
     * @param {struct.ModelOptions} options Options for model configuration
     */
    initialize: function(data, options) {
        data = data || {};
        options = options || {};
        Backbone.Model.prototype.initialize.call(this, data, options);
    },

    /**
     * Initializes attribute.
     *
     * It takes attribute name, options object and default value, and
     * it sets value of attribute searching for value in order:
     * options, object, default.
     *
     *      @example
     *      this.initAttribute('cssStyle', options, {}, { merge: true })
     *
     * @param {String} name Attribute name
     * @param {struct.ModelOptions} [options={}] Options object
     * @param {*} [def=undefined] Default value
     * @param {struct.ModelAttributeInitializationConfig} [cfg={}] Configuration for attribute init
     */
    initAttribute: function(name, options, def, cfg) {
        cfg = $.extend({
            merge    : false,
            deep     : false,
            propagate: false
        }, cfg);

        options = options || {};

        if( cfg.merge ) {
            this[name] = $.extend(cfg.deep === true, {}, def, this[name], options[name]);
        } else {
            this[name] = options[name] || this[name] || def;
        }

        if( cfg.propagate ) {
            this.attributes[name] = this[name];
        }
    },

    serialize: function() {
        var json = this.toJSON();
        var ret = {};

        for( var i in json ) {
            if( json.hasOwnProperty(i) ) {
                var o = json[i];
                ret[i] = typeof o == 'object' ? (o.serialize ? o.serialize() : (o.toJSON ? o.toJSON() : o)) : o;
            }
        }

        return ret;
    }
});

app.getService('aop').addAspectLogging(app.AbstractModel);
/**
 * @class
 * Class for handling ordered hashmaps.
 * @extends app.AbstractModel
 */
app.common.models.OrderedModel = app.AbstractModel.extend({

    /**
     * Array with key names, describing order of data in this object.
     * @type {Array}
     */
    order: null,

    /**
     * @constructor
     * @inheritDoc
     *
     * As attributes, you may pass another model or JS object.
     * If Backbone model is passed, it is converted to JSON.
     * Order from app.common.models.OrderedModel objects is preserved.
     *
     * @param {Object} [attributes={}] Model attributes
     * @param {struct.ModelOptions} [options] Options
     */
    initialize: function(attributes, options) {

        if( typeof attributes == 'undefined' ) {
            attributes = {};
        } else if( attributes instanceof app.common.models.OrderedModel ) {
            this.order = attributes.order;
        } else if( attributes instanceof  Backbone.Model ) {
            attributes = attributes.attributes;
        }

        this.order = this.order || Object.keys(attributes);

        app.AbstractModel.prototype.initialize.call(this, attributes, options);
    },

    /**
     * Returns JS array created from model attributes with order
     * described by #order
     * @returns {Array}
     */
    toArray: function() {
        return this.getValues();
    },

    /**
     * Works as #toJSON but returns atrributes described in #order only.
     * @returns {Object}
     */
    toHashmap: function() {
        var ret = {};
        this.order.forEach(function(name) {
            ret[name] = this.get(name);
        }, this);
        return ret;
    },

    _nextId: 0,

    /**
     * Appends item to collection.
     *
     * If key is missing, it will be autogenerated.
     *
     * @param {*} value Item valye
     * @param {String} [key] Item key
     */
    addItem: function(value, key) {
        key = '' + (key || ('_' + this._nextId++));
        this.order = _.without(this.order, key);
        this.order.push(key);
        this.set(key, value);
    },

    /**
     * Removes item by given key.
     * @param {String} key Item key
     */
    removeItem: function(key) {
        key = typeof key == 'number' ? this.order[key] : key;
        this.order = _.without(this.order, key);
        this.unset(key);
    },

    /**
     * Returns all keys stored in collection
     * @returns {Array} Item keys
     */
    getKeys: function() {
        return this.order;
    },

    /**
     * Returns all values stored in collection
     * @returns {Array} Item values
     */
    getValues: function() {
        return this.order.map(function(name) {
            return this.get(name);
        }, this);
    },

    /**
     * Iterates over collection and calls callback.
     * @param {Function} fn Callback function
     * @param {Object} fn.value Item found
     * @param {String} fn.key Item key
     * @param {Number} fn.index Item index
     * @param {Object} fn.object Hashmap representation of collection
     * @param {Object} thisArg Context for callback execution
     */
    forEach: function(fn, thisArg) {
        var self = this;
        var obj = this.toHashmap();
        this.order.forEach(function(key, idx) {
            fn.call(this, self.get(key), key, idx, obj);
        }, thisArg);
    },

    /**
     * Returns collection's length
     * @returns {Number} Collection's length
     */
    getLength: function() {
        return this.getKeys().length;
    }
});
/**
 * @class
 * Model for items in container widgets.
 * @extends app.common.models.OrderedModel
 */
app.widgets.container.ContainerModel = app.common.models.OrderedModel.extend({

});
/**
 * @class
 * Container widget. Allows to aggregate other widgets.
 * @extends app.AbstractView
 * @requires app.widgets.container.ContainerModel
 * @uses app.common.models.OrderedModel
 */
app.widgets.container.ContainerView = app.AbstractView.extend({

    /**
     * @inheritDoc
     */
    modelDescriptor: null,

    /**
     * @inheritDoc
     */
    template: 'ContainerView',

    /**
     * @inheritDoc
     */
    cssClass: 'ui-container',

    /**
     * Item's envelope tag name
     * @type {String}
     */
    itemTagName: 'li',

    itemDescriptor            : null,
    itemPreprocessorDescriptor: null,
    itemPreprocessor          : null,
    itemsProperty             : 'items',
    modelList                 : false,
    _originalItems            : null,
    _items                    : null,

    initialize: function(options) {
        this.initAttribute('itemDescriptor', options, {}, {
            merge: true,
            deep : true
        });

        this.initAttribute('itemPreprocessor', options);
        this.initAttribute('itemsProperty', options);

        this.initAttribute('itemPreprocessorDescriptor', options, {
            className: 'app.widgets.container.ContainerView.Preprocessors.Standard'
        }, {
            merge: true,
            deep : true
        });

        this.initAttribute('modelList', options);

        app.AbstractView.prototype.initialize.apply(this, arguments);
    },

    /**
     * @inheritDoc
     */
    render: function() {
        app.AbstractView.prototype.render.call(this);

        this.$el
            .addClass(this._resolveClassName())
            .addClass(this._resolveClassName(this.widgetId));

        this.$('.ui-container-items-count')
            .addClass(this._getItemsCountClassName());

        this.$('.ui-container-items')
            .addClass(this._resolveClassName('items'))
            .addClass(this._getItemsClassName());

        this._renderItems();
    },

    /**
     * Renders items contained by container.
     * @private
     */
    _renderItems: function() {
        var itemsContainer = this.$('.' + this._getItemsClassName());

        itemsContainer.html('');

        this.getItems().forEach(function(item, key, idx, obj) {
            $('<' + this.itemTagName + '></' + this.itemTagName + '>')
                .addClass(this._resolveClassName('item'))
                .addClass(this._resolveClassName('item-' + idx))
                .addClass(this._resolveClassName('item-' + key))
                .appendTo(itemsContainer)
                .append(item.$el);
            item.delegateEvents();
        }, this);

        this.$('.' + this._getItemsCountClassName()).html(this.getItems().getLength());
    },

    /**
     * Returns name of CSS class for element containing items count
     * @returns {string} CSS class name
     * @private
     */
    _getItemsCountClassName: function() {
        return 'ui-container-items-count-' + this.widgetId;
    },

    /**
     * Returns name of CSS class for element containing items list
     * @returns {string} CSS class name
     * @private
     */
    _getItemsClassName: function() {
        return 'ui-container-items-' + this.widgetId;
    },

    /**
     * Add widget to container.
     *
     * Widget will be stored in app.common.models.OrderedModel under key passed as second
     * argument or autogenerated id.
     *
     * @param {app.AbstractView|*} widget Widget or widget alias to be added
     * @param {String} [name] Key for storing widget.
     */
    addItem: function(widget, name) {
        this.getItems().addItem(widget, name);
    },

    /**
     * Removes widget with given name.
     * @param {String} name Key under which the widget is stored.
     * @returns {*}
     */
    removeItem: function(name) {
        return this.getItems().removeItem(name);
    },

    /**
     * Returns items contained in container.
     * @returns {app.common.models.OrderedModel} Items stored in ordered model
     */
    getItems: function() {
        this._importItems();
        this._normalizeItems();

        if( !this._itemsInitialized ) {
            this.listenTo(this.getModel(), 'change', this._itemsChanged);
            this.listenTo(this._items, 'change', this._itemsChanged);
            this._itemsInitialized = true;
        }

        return this._items;
    },

    /**
     * Gets items refernece using path given in itemsProperty.
     * @returns {*} Items
     * @private
     */
    _importItems: function() {
        var itemsReference = app.getService('objects').getObjectByPath(this.itemsProperty, this.getModel());

        if( this._originalItems != itemsReference ) {
            this._items = this._originalItems = itemsReference;
        }
    },

    /**
     * Normalizes items.
     *
     * Items should be stored in app.OrderdModel object.
     * Each container item should be an instance of app.AbstractView.
     * This function normalizes items passed to container model.
     *
     * @private
     */
    _normalizeItems: function() {
        this._items = this._items || [];

        if( this._items instanceof Backbone.Collection ) {
            this._items = this._items.toArray();
        }

        if( !(this._items instanceof app.widgets.container.ContainerModel ) ) {
            this._items = new app.widgets.container.ContainerModel(this._items);
        }

        this._getPreprocessor().preprocess(this._items, this);
    },

    _getPreprocessor: function() {

        if( !this.itemPreprocessor ) {
            this.itemPreprocessor = app.getService('objects').model({}, this.itemPreprocessorDescriptor);
        }

        return this.itemPreprocessor;
    },

    /**
     * Handler for items change event
     * @private
     */
    _itemsChanged: function() {
        this._renderItems();
    },

    /**
     * Resolves name for CSS class.
     * It adds ui-container class to CSS class list and
     * it adds suffix for each of the CSS classes.
     *
     * @param {String} suffix Suffix for CSS classes
     * @returns {string} CSS classes formatted as string
     * @private
     */
    _resolveClassName: function(suffix) {
        suffix = suffix ? ('-' + suffix) : '';

        var classes = this.cssClass.split(/[ ]+/);

        if( classes.indexOf('ui-container') < 0 ) {
            classes.unshift('ui-container');
        }

        if( classes.indexOf('qa-container') < 0 ) {
            classes.push('qa-container');
        }

        classes = classes.map(function(cls) {
            return cls + suffix;
        });

        return classes.join(' ');
    }
});

app.widgets.container.ContainerView.Preprocessors = {};

/**
 * @class
 * @extends app.AbstractModel
 *
 * Standard item preprocessor used by container widget. Normalizes items for container.
 */
app.widgets.container.ContainerView.Preprocessors.Standard = app.AbstractModel.extend({
    /**
     * Preprocesses all items. Can be overwritten in subclasses.
     *
     * As container has to have widgets as items, items list must be preprocessed to normalize them.
     * Preprocessor should convert any object or value to app.AbstractView based class.
     *
     * In many cases it is better to overwrite #preprocessItem
     *
     * @param {app.widgets.container.ContainerModel} items Items to be processed.
     * @param {app.widgets.container.ContainerView} context Container used to show items
     */
    preprocess: function(items, context) {
        items.getKeys().forEach(function(key) {
            var item = items.get(key);
            if( !(item instanceof app.AbstractView) ) {
                items.set(key, this.preprocessItem(item, context));
            }
        }, this);
    },

    /**
     * Preprocesses item. Can be overwritten in subclasses.
     *
     * If app.AbstractModel found, or modelList is set to true on container, item is used as model for target widget.
     * If app.AbstractCollection found, it is used as collection for target widget.
     * If non-object found, it is used as value of app.AbstractView model.
     *
     * Otherwise, it is used as struct.WidgetDescriptor
     *
     * @param {*} item Item to be preprocessed
     * @param {app.widgets.container.ContainerView} context Container used to show items
     * @returns {app.AbstractView} Normalized widget
     */
    preprocessItem: function(item, context) {
        if( item instanceof app.AbstractModel || (context.modelList && $.isPlainObject(item)) ) {
            item = {
                model: item
            };
        } else if( item instanceof app.AbstractCollection ) {
            item = {
                collection: item
            };
        } else if( typeof item != 'object' ) {
            item = {
                model: {
                    value: item
                }
            };
        }

        item = $.extend({}, context.itemDescriptor, item);
        return app.getService('objects').widget(item);
    }
});

/**
 * @class
 * Mixin which provides standard protocol for closable widgets.
 */
app.common.mixins.Closable = {

    /**
     * Default sliding configuration. Slide effect is used to open/close closable elements.
     */
    slidingConfig: null,

    /**
     * CSS class name that marks closable DOM elements.
     */
    closableCssClass: 'ui-closable-item',

    /**
     * Initial state of widget
     */
    initialCloseAction: null,

    /**
     * Indicates if close() function was used
     */
    _closedByUser: false,

    /**
     * Indicates if open() function was used
     */
    _openedByUser: false,

    /**
     * Initializes closable mixin. Ran automatically.
     */
    initializeClosable: function(options) {
        this.initAttribute('closableCssClass', options);
        this.initAttribute('slidingConfig', options, {
            duration: 120
        }, {
            merge: true
        });
        this.initAttribute('initialCloseAction', options);

        this.render = _.wrap(this.render, function(render) {
            render.call(this);
            this.$('.' + this.closableCssClass)
                .removeClass(this.closableCssClass)
                .addClass(this._getClosableClassName());

            if( this.initialCloseAction ) {
                this[this.initialCloseAction]();
                this._closedByUser = false;
                this._openedByUser = false;
                this.initialCloseAction = null;
                if( !this.isOpened() ) {
                    this._getClosables().css('display', 'none');
                }
            }
        });
    },

    /**
     * Returns class name for closable DOM elements.
     * @returns {string} Closable elements class name
     * @private
     */
    _getClosableClassName: function() {
        return this.closableCssClass + '-' + this.widgetId;
    },

    /**
     * Gets all closable elements
     * @returns {jQuery} Closable elements
     * @private
     */
    _getClosables: function() {
        return this.$el.find('.' + this._getClosableClassName());
    },

    /**
     * Opens all closable elements
     */
    open: function() {
        this.$el.removeClass('closed').addClass('open');
        this._getClosables().slideDown(this.slidingConfig);
        this._openedByUser = true;
        this.trigger('opened');
    },

    /**
     * Closes all closable elements
     */
    close: function() {
        this.$el.removeClass('open').addClass('closed');
        this._getClosables().slideUp(this.slidingConfig);
        this._closedByUser = true;
        this.trigger('closed');
    },

    /**
     * Switches between open and close status of closable elements
     */
    clopen: function() {
        if( this.isOpened() ) {
            this.close();
        } else {
            this.open();
        }
    },

    /**
     * Checks if widget is opened
     * @returns {boolean} Openess flag
     */
    isOpened: function() {
        return !this.$el.hasClass('closed');
    }
};
/**
 * Box widget.
 * @class
 * @extends app.widgets.container.ContainerView
 * @mixins app.common.mixins.Closable
 */
app.widgets.boxes.views.Box = app.widgets.container.ContainerView.extend(app.common.mixins.Closable).extend({
    /**
     * @inheritDoc
     */
    template: 'boxes:Box',

    /**
     * @inheritDoc
     */
    cssClass: 'ui-box',

    /**
     * @inheritDoc
     */
    initialCloseAction: 'close',

    /**
     * @inheritDoc
     * @private
     */
    _renderItems: function() {
        app.widgets.container.ContainerView.prototype._renderItems.apply(this, arguments);
        if( !this._closedByUser && !this._getClosables().is(':visible') ) {
            this.open();
        }
    }
});
/**
 * Title widget for box group widgets company.
 * @class
 * @extends app.AbstractView
 */
app.widgets.boxes.views.BoxGroupTitle = app.AbstractView.extend({

    /**
     * @inheritdoc
     */
    template: 'boxes:BoxGroupTitle',

    /**
     * @inheritdoc
     */
    cssClass: 'ui-box-group-title',

    /**
     * @constructor
     * @inheritdoc
     */
    initialize: function(options) {
        app.AbstractView.prototype.initialize.apply(this, arguments);
        this.listenTo(this.getModel(), 'change:title', this.render);
    }
});

/**
 * Box group widget.
 * @class
 * @extends app.widgets.container.ContainerView
 * @mixins app.common.mixins.Closable
 * @requires app.widgets.boxes.views.BoxGroupTitle
 */
app.widgets.boxes.views.BoxGroup = app.widgets.container.ContainerView.extend(app.common.mixins.Closable).extend({
    /**
     * @inheritDoc
     */
    cssClass: 'ui-box-group',

    /**
     * @inheritDoc
     */
    template: 'boxes:BoxGroup',

    /**
     * Name of event that updates widget's model
     * @type String
     */
    updateEventName: 'update-model',

    sharedDataProperty: 'data',

    /**
     * @inheritDoc
     */
    itemDescriptor: {
        className: 'app.widgets.boxes.views.Box'
    },

    /**
     * Update event source object.
     * @type Backbone.View
     */
    dispatcher: null,

    /**
     * @constructor
     * @param {struct.BoxGroupOptions} [options={}] Configuration options
     * @inheritDoc
     */
    initialize: function(options) {
        app.widgets.container.ContainerView.prototype.initialize.apply(this, arguments);

        this.initAttribute('dispatcher', options, this);
        this.initAttribute('updateEventName', options);
        this.initAttribute('sharedDataProperty', options);

        this._prepareTitle();
        this._listenForData();
        this._listenToBoxModels();
        this.initBoxGroup();
        this._updateBoxModels();
    },

    /**
     * Initializes boxes in box group.
     *
     * SHOULD BE overwritten instead of initialize, to fill box group
     * with boxes at start.
     *
     * By default sets title and no boxes.
     */
    initBoxGroup: function() {
        this.getModel().set({
            title: 'Some Box Group'
        });

        // this.addItem(...)
    },

    /**
     * Renders app.widgets.boxes.views.BoxGroupTitle widget as box group title
     * and listens for title change.
     * @private
     */
    _prepareTitle: function() {
        this._titleWidget = new app.widgets.boxes.views.BoxGroupTitle({
            model: { title: this.get('title') },
            el   : this.$('.ui-box-group-title')
        });

        this.listenTo(this.getModel(), 'change:title', this._updateTitle);
    },

    /**
     * Updates title in view.
     * @private
     */
    _updateTitle: function() {
        this._titleWidget.getModel().set({
            title: this.get('title')
        });
    },

    /**
     * @event update-model
     * Event that indicates widget's model update need.
     * Its name is configrable by #updateEventName attribute
     * @param {Object} data JS object used to update widget's model
     */

    /**
     * Initilizes listening for update events on #dispatcher.
     * @private
     */
    _listenForData: function() {
        if( this.dispatcher ) {
            this.listenTo(this.dispatcher, this.updateEventName, this._updateModel);
        }
    },

    /**
     * Updates model with JS object. Handler for update event.
     * @param {Object} data Model JS object.
     * @private
     */
    _updateModel: function(data) {
        this.getModel().set(this.sharedDataProperty, data);
    },

    /**
     * Initializes listening for model changes that implies
     * box models updates.
     * @private
     */
    _listenToBoxModels: function() {
        var self = this;
        var model = this.getModel();
        this.listenTo(model, 'change', function() {
            self._updateBoxModels();
        });
    },

    /**
     * Updates box models. It propagates JS objects stored in
     * model to box models.
     *
     * @private
     */
    _updateBoxModels: function() {
        var data = this.get(this.sharedDataProperty);

        this.getItems().forEach(function(item) {
            item.getModel().set(this.sharedDataProperty, data);
        }, this);
    }
});
/**
 * @class
 * @abstract
 * @extends Backbone.Collection
 * Abstract base class for Collection classes.
 * Other classes should extend this class, not Backbone's one.
 * This class can provide additional, abstract functionalities for inherited classes.
 *
 * @requires app.AbstractModel
 */
app.AbstractCollection = Backbone.Collection.extend({
    model: app.AbstractModel,

    serialize: function() {
        var json = this.models;
        var ret = [];

        for( var i in json ) {
            var o = json[i];
            ret[i] = typeof o == 'object' ? (o.serialize ? o.serialize() : (o.toJSON ? o.toJSON() : o)) : o;
        }

        return ret;
    }
});
app.common.data.dto.Data = app.AbstractModel.extend({
    initialize: function() {
        app.AbstractModel.prototype.initialize.apply(this, arguments);
        this._normalizeModel();
    },

    _normalizeModel: function() {
        function normalize(o) {
            for( var i in o ) {
                if( typeof o[i] == 'object' && (o[i].constructor == Object || Array.isArray(o[i])) ) {
                    normalize(o[i]);
                } else if( typeof o[i] == 'string' ) {
                    o[i] = o[i].replace("\u0087", "\u00A5");
                }
            }
        }

        normalize(this.attributes);
    },

    getErrors: function() {
        return [];
    },

    hasErrors: function() {
        return this.getErrors().length > 0;
    }
});
app.common.data.dto.ErrorData = app.common.data.dto.Data.extend({
    defaults: function() {
        return {
            code: 0,
            message: 'Unknown error',
            data: []
        };
    },

    getMessage: function() {
        return this.get('message');
    },

    getData: function() {
        return this.get('data');
    },

    getCode: function() {
        return this.get('code');
    }
});
/**
 * @class
 * @singleton
 * Service for respoinse data management
 */
app.services.dto = {

    _dataModels: [],

    registerDataModel: function(matcher, modelDescriptor) {
        this._dataModels.push({
            matcher: matcher,
            modelDescriptor: modelDescriptor
        });
    },

    _dataViews: {},

    registerDataView: function(modelClassName, viewDescriptor, purpose) {
        purpose = purpose || 'output';

        if( !this._dataViews[purpose] ) {
            this._dataViews[purpose] = [];
        }

        this._dataViews[purpose].push({
            modelClassName: modelClassName,
            viewDescriptor: viewDescriptor
        });
    },

    getDataModel: function(rawData, defaultModelDescriptor) {
        modelDescriptor = defaultModelDescriptor || 'app.common.data.dto.Data';

        var objects = app.getService('objects');

        for( var i in this._dataModels ) {
            var o = this._dataModels[i];
            if( o.matcher(rawData) ) {
                modelDescriptor = o.modelDescriptor;
                break;
            }
        }

        return objects.model(rawData, objects.normalizeDescriptor(modelDescriptor));
    },

    getDataView: function(modelObject, purpose, defaultViewDescriptor) {
        purpose = purpose || 'output';
        var viewDescriptor =  defaultViewDescriptor || null;

        var objects = app.getService('objects');

        for( var i in (this._dataViews[purpose] || []) ) {
            var o = this._dataViews[purpose][i];

            var modelClass = objects.getObjectByPath(o.modelClassName);

            if( modelObject instanceof modelClass ) {
                viewDescriptor = o.viewDescriptor;
                break;
            }
        }

        if( viewDescriptor == null ) {
            return null;
        }

        viewDescriptor = $.extend({
            model: modelObject
        }, objects.normalizeDescriptor(viewDescriptor));

        return objects.widget(viewDescriptor);
    }
}
;app.common.data.dto.Response = app.AbstractModel.extend({
    getDataObjects: function() {
        return this.attributes["d.CommandFlow"] ? this.attributes["d.CommandFlow"]["d.Data"].map(function(data) {
            return app.getService('dto').getDataModel(data, 'app.responses.text.models.Text');
        }) : [];
    },

    getErrors: function() {
        return this.attributes.error ? [new app.common.data.dto.ErrorData(this.attributes.error)] : [];
    },

    hasErrors: function() {
        return this.getErrors().length > 0;
    }
});
app.common.data.dto.MalformedResponse = app.common.data.dto.Response.extend({
    getDataObjects: function() {
        return [];
    },

    getErrors: function() {
        return [new app.common.data.dto.ErrorData({
            message: 'Response malformed',
            data   : [
                {
                    field  : 'responseText',
                    message: this.attributes.responseText
                }
            ]
        })];
    }
});
app.common.data.dto.MaskData = app.common.data.dto.Data.extend({
});
app.common.data.dto.ResponseData = app.common.data.dto.Data.extend({
});
app.common.data.dto.UsgResponseData = app.common.data.dto.ResponseData.extend({

    _errors: null,

    getErrors: function() {
        if( !this._errors ) {
            this._errors = [];

            var os = this.attributes['d.Structure']['o.ExtensionPoint_Summary'];
            var rs = [];

            for( var i in os ) {
                rs = rs.concat(os[i]);
            }

            for( var i in rs ) {
                if( rs[i]['s.ApplicationResults']['s.Error'] ) {
                    this._errors.push(new app.common.data.dto.ErrorData({
                        message: JSON.stringify(rs[i]['s.ApplicationResults']),
                        data   : [rs[i]['s.ApplicationResults']]
                    }))
                }
            }
        }

        return this._errors;
    }
});
moment.lang('en', {
    meridiem: function(hour, minute, isLowercase) {
        return hour < 12 ? 'A' : 'P';
    }
});

/**
 * @class
 * @singleton
 * Dates handling service
 */
app.services.dates = new (app.AbstractModel.extend({
    /**
     * Date formats that can be received from Sabre systems.
     */
    _sabreDateFormats: ['YYYY-MM-DDTHH:mm', 'YYYY-MM-DD', 'MM-DDTHH:mm', 'MM-DD', 'HH:mm', 'HH.mm'],

    /**
     * Converts given date/time to ISO formatted string
     * @param {String} dateStr Input date/time string
     * @returns {String} Formatted date/time string
     */
    toIsoString: function(dateStr) {
        return moment(dateStr, this._sabreDateFormats).toISOString();
    },

    /**
     * Converts given date/time to ISO date formatted string
     * @param {String} dateStr Input date/time string
     * @returns {String} Formatted date string
     */
    toIsoDate: function(dateStr) {
        return moment(dateStr, this._sabreDateFormats).format('YYYY-MM-DD');
    },

    /**
     * Converts given date/time to ISO time formatted string
     * @param {String} dateStr Input date/time string
     * @returns {String} Formatted time string
     */
    toIsoTime: function(dateStr) {
        return moment(dateStr, this._sabreDateFormats).format('HH:mm');
    },

    /**
     * Converts given date/time to ISO date and time formatted string
     * @param {String} dateStr Input date/time string
     * @returns {String} Formatted date and time string
     */
    toIsoDateTime: function(dateStr) {
        return this.toIsoDate(dateStr) + ' ' + this.toIsoTime(dateStr);
    },

    /**
     * Returns time formated in Sabre way, ex.  130P
     * @param {String|Date} dateStr Date to be formatted
     * @returns {string} Formatted time
     */
    toSabrishTime: function(dateStr) {
        try {
            return moment(dateStr, this._sabreDateFormats).format('hmmA').toUpperCase();
        } catch( e ) {
            return '-n/a-';
        }
    },

    /**
     * Returns date formated in Sabre way, ex. 13JAN
     * @param {String|Date} dateStr Date to be formatted
     * @returns {string} Formatted date
     */
    toSabrishDate: function(dateStr) {
        try {
            return moment(dateStr, this._sabreDateFormats).format('DDMMM').toUpperCase();
        } catch( e ) {
            return '-n/a-';
        }
    },

    /**
     * Returns weekday formated in Sabre way, ex. F for friday
     * @param {String|Date} dateStr Date to be formatted
     * @returns {string} Formatted weekday
     */
    toSabrishShortWeekday: function(dateStr) {
        var day = parseInt(moment(dateStr, this._sabreDateFormats).format('d'));
        return ['S', 'M', 'T', 'W', 'Q', 'F', 'J'][day];
    },

    toSabrishWeekday: function(dateStr) {
        return moment(dateStr, this._sabreDateFormats).format('ddd').toUpperCase();
    },

    toSabrishLongWeekday: function(dateStr) {
        return moment(dateStr, this._sabreDateFormats).format('dddd').toUpperCase();
    },

    getDayDifference: function(dateStrA, dateStrB) {
        var a = moment(dateStrA, this._sabreDateFormats).startOf('day');
        var b = moment(dateStrB, this._sabreDateFormats).startOf('day');
        return a.diff(b, 'days');
    },

    getHourShiftFromTimezoneName: function(timezoneName, date) {
        date = moment(date, this._sabreDateFormats).format('YYYY-MM-DD') + ' 00:00:00 ' + timezoneName;
        date = new Date(date);
        var shift = -1 * (date.getUTCHours() + (date.getUTCMinutes() / 60));
        return shift;
    }
}));
app.common.data.flight.FlightConnection = app.AbstractModel.extend({
    initialize: function(data, options) {
        app.AbstractModel.prototype.initialize.apply(this, arguments);

        if( !data.segments ) {
            this.set({
                segments: new app.common.data.flight.FlightSegments([ data ])
            });
        }

        app.common.data.flight.FlightConnection.__extendData(this, data);
    }
});

app.common.data.flight.FlightConnection.createFromSegments = function(segments) {
    return this.__summarizeChildren(
        segments,
        app.common.data.flight.FlightSegments,
        app.common.data.flight.FlightConnection,
        'segments'
    );
};

app.common.data.flight.FlightConnection.createFromSubsegments = function(subsegments) {
    return this.createFromSegments([
        app.common.data.flight.FlightSegment.createFromSubsegments(subsegments)
    ]);
};

app.common.data.flight.FlightConnection.__summarizeChildren = function(children, childrenClass, parentClass, childrenAttribute) {
    if( children.length < 1 ) {
        throw new Error("Children [" + childrenAttribute + "] are missing");
    }

    if( !(children instanceof childrenClass) ) {
        children = new childrenClass(children);
    }

    var childrenObject = {};
    childrenObject[childrenAttribute] = children;

    var lastChild = children.last().toJSON() || {};

    var data = $.extend({}, children.first().toJSON(), {
        destinationLocation: lastChild.destinationLocation,
        arrivalDateTime    : lastChild.arrivalDateTime,
        updatedArrivalTime : lastChild.updatedArrivalTime,
        subsegments        : _.foldl(children.pluck('subsegments').filter(function(subsegment) {
            return !!subsegment;
        }), function(memo, subsegment) {
            return memo.concat(subsegment.toArray());
        }, [])
    }, childrenObject);

    return new parentClass(data);
}

app.common.data.flight.FlightConnection.__extendData = function(obj, data) {

    var dates = app.getService('dates');

    // new/old format compatibility
    if( data.arrivalDateTime ) {
        data['@ArrivalDateTime'] = data.arrivalDateTime;
        data['@DepartureDateTime'] = data.departureDateTime;
        data['@StopQuantity'] = data.stopQuantity;
    }

    var dayDiff = dates.getDayDifference(data['@ArrivalDateTime'], data['@DepartureDateTime']);

    var travelTimeMinutes = (data['air.FlightDetails'] && data['air.FlightDetails']['@TotalTravelTime']) || '';

    obj.set({
        formattedDepartureDate   : dates.toSabrishDate(data['@DepartureDateTime']),
        formattedDepartureTime   : dates.toSabrishTime(data['@DepartureDateTime']),
        formattedArrivalTime     : dates.toSabrishTime(data['@ArrivalDateTime']),
        nextDayIndicator         : dayDiff ? ('+' + dayDiff) : '',
        formattedDepartureWeekday: dates.toSabrishWeekday(data['@DepartureDateTime']),
        formattedTotalTravelTime : travelTimeMinutes ? sprintf('%02d.%2dh', Math.floor(travelTimeMinutes / 60), travelTimeMinutes % 60) : ''
    });

    if( !parseInt(data['@StopQuantity'] || '0') ) {
        delete obj.attributes.stopQuantity;
        delete obj.attributes['@StopQuantity'];
    }
}
;/**
 * @requires app.common.data.flight.FlightConnection
 */
app.common.data.flight.FlightConnections = app.AbstractCollection.extend({
    model: app.common.data.flight.FlightConnection,

    getFlightSegments: function() {
        return new app.common.data.flight.FlightSegments(
            _.foldl(this.pluck('segments'), function(memo, segments) {
                return memo.concat(segments.toArray());
            }, [])
        );
    }
});
app.common.data.flight.FlightSegment = app.AbstractModel.extend({
    initialize: function(data, options) {
        app.AbstractModel.prototype.initialize.apply(this, arguments);

        if( !data.subsegments ) {
            this.set({
                subsegments: new app.common.data.flight.FlightSubsegments([ data ])
            });
        }

        app.common.data.flight.FlightConnection.__extendData(this, data);
    }
});

app.common.data.flight.FlightSegment.createFromSubsegments = function(subsegments) {
    return app.common.data.flight.FlightConnection.__summarizeChildren(
        subsegments,
        app.common.data.flight.FlightSubsegments,
        app.common.data.flight.FlightSegment,
        'subsegments'
    );
}
;/**
 * @requires app.common.data.flight.FlightSegment
 */
app.common.data.flight.FlightSegments = app.AbstractCollection.extend({
    model: app.common.data.flight.FlightSegment
});
app.common.data.flight.FlightSubsegment = app.AbstractModel.extend({
    initialize: function(data, options) {
        app.AbstractModel.prototype.initialize.apply(this, arguments);
        app.common.data.flight.FlightConnection.__extendData(this, data);
    }
});
/**
 * @requires app.common.data.flight.FlightSubsegment
 */
app.common.data.flight.FlightSubsegments = app.AbstractCollection.extend({
    model: app.common.data.flight.FlightSubsegment,

    getFlightSegmentSummary: function() {
        var ret = {};

        this.forEach(function(item) {
            ret = $.extend(true, item.toJSON(), ret);
        }, this);

        return new app.common.data.flight.FlightSubsegment(ret);
    }
});
app.common.data.hotel.HotelSegment = app.AbstractModel.extend({
    initialize: function(data, options) {
        app.AbstractModel.prototype.initialize.apply(this, arguments);

        var dates = app.getService('dates');

        this.set({
            source                     : 'itinerary-details',
            formattedDateIn            : dates.toSabrishDate(data.timeSpan.start),
            formattedDateOut           : dates.toSabrishDate(data.timeSpan.end),
            formattedAmountAndCurrency : vsprintf('%.2f%s', data.roomRates.rate.hotelTotalPricing.approximateTotal.amountAndCurrency.split(' ')),
            formattedConfirmationNumber: data.basicPropertyInfo.confirmationNumber || 'n/a'
        });
    }
});
app.common.data.vehicle.VehicleSegment = app.AbstractModel.extend({
    initialize: function(data, options) {
        app.AbstractModel.prototype.initialize.apply(this, arguments);

        var dates = app.getService('dates');

        var appAmount = data.vehVendorAvail.vehResCore.vehicleCharges.vehicleCharge
            .chargeDetails.approximateTotalCharge.filter(function(item) {
                return item.rateType == 'APPROXIMATE TOTAL PRICE';
            })[0];

        var mileage = data.vehVendorAvail.vehResCore.vehicleCharges.vehicleCharge.mileage;

        this.set({
            source                       : 'itinerary-details',
            formattedPickUpDate          : dates.toSabrishDate(data.vehRentalCore.pickUpDateTime),
            formattedPickUpTime          : dates.toSabrishTime(data.vehRentalCore.pickUpDateTime),
            formattedReturnDate          : dates.toSabrishDate(data.vehRentalCore.returnDateTime),
            formattedReturnTime          : dates.toSabrishTime(data.vehRentalCore.returnDateTime),
            appAmount                    : appAmount,
            formattedAppAmountAndCurrency: sprintf('%.2f%s', appAmount.amount, mileage.currencyCode),
            mileage                      : mileage,
            equipment                    : data.vehVendorAvail.vehResCore.pricedEquip.equipment,
            formattedConfirmationNumber  : data.confirmationNumber || 'n/a'
        });
    }
});
/**
 * @event state-changed
 * Fired when widget's state has changed.
 * @param {String} stateName New state name.
 */

/**
 * @class
 * Mixin adding CSS morphing ability to widgets.
 *
 * Widget gets simple state machine which contains states for css styles and classes.
 * @uses struct.CssStateObject
 */
app.common.mixins.Morphing = {

    /**
     * Initial state for wigdet.
     */
    cssInitialState: 'initial',

    /**
     * Current widget state.
     */
    _cssCurrentState: '',

    /**
     * CSS states map.
     *
     * It contains defined states. In the fact, SM used by widget
     * has unlimited number of empty states overwritten by defined
     * in this property.
     *
     * There is one special state name: "*". It is base state for all
     * other states.
     *
     * @type {Object[struct.CssStateObject]}
     */
    cssStates: null,

    /**
     * Initializes CSS morphing ability.
     * @param {struct.MorphingOptions} [options={}] Morphing options
     */
    initializeMorphing: function(options) {
        this.initAttribute('cssStates', options, {}, { merge: true, deep: true });
        this.initAttribute('cssInitialState', options, 'initial');

        this.changeState(this.cssInitialState);

        this.render = _.wrap(this.render, function(render) {
            render.call(this);
            this.resetCurrentState();
        });
    },

    /**
     * Changes CSS state by name.
     *
     * There is one special state name: "*". It is base state for all
     * other states. Chosen state is merged with base state before it
     * is applied to widget.
     *
     * For resetting current state use #resetCurrentState or #applyState
     * - setting the same state should not do anything.
     *
     * @param {String} name New CSS state name
     * @fires state-changed
     */
    changeState: function(name) {
        if( this._cssCurrentState == name ) {
            return;
        }
        ;

        this._unapplyState(this._cssCurrentState);
        this._cssCurrentState = name;
        this._applyState(this._cssCurrentState);
        this.trigger('state-changed', this._cssCurrentState);
    },

    /**
     * Returns state of the given name.
     * @param {String} name State name
     * @returns {struct.CssStateObject}
     */
    getState: function(name) {
        return this.cssStates[name] || (this.cssStates[name] = {});
    },

    /**
     * Sets state for the given name.
     * @param {String} name State name
     * @param {struct.CssStateObject} state CSS state object
     */
    setState: function(name, state) {
        this.cssStates[name] = state;
    },

    /**
     * Returns current state name.
     * @returns {string} Current state name.
     */
    getCurrentStateName: function() {
        return this._cssCurrentState;
    },

    /**
     * Returns current state object
     * @returns {struct.CssStateObject} Current state
     */
    getCurrentState: function() {
        return this.getState(this.getCurrentStateName());
    },

    /**
     * Returns base CSS state.
     * @returns {struct.CssStateObject} Base state
     */
    getBaseState: function() {
        return this.getState('*');
    },

    /**
     * Resets current state.
     *
     * It unapplies and applies current state.
     */
    resetCurrentState: function() {
        this._unapplyState(this._cssCurrentState);
        this._applyState(this._cssCurrentState);
    },

    /**
     * Cleans state from non-css attributes used by morphing mixin.
     *
     * @param {struct.CssStateObject} state CSS state object
     * @returns {Object} CSS attributes object
     * @private
     */
    _cleanCss: function(state) {
        return $.extend({}, state, {
            cssClass    : '',
            applyState  : '',
            unapplyState: ''
        });
    },

    /**
     * Applies state of given name.
     *
     * @param {String} name State name
     * @private
     */
    _applyState: function(name) {
        var baseState = this.getBaseState();
        var state = this.getState(name);

        var classes = (this.cssClass || '') + ' ' + (baseState.cssClass || '') + ' ' + (state.cssClass || '');
        this._applyClasses(classes, name);

        this.$el.css(this.cssStyle || {});
        this.$el.css(this._cleanCss(baseState));
        this.$el.css(this._cleanCss(state));

        typeof baseState.applyState == 'function' ? baseState.applyState.call(this) : null;
        typeof state.applyState == 'function' ? state.applyState.call(this) : null;
    },

    /**
     * Applies CSS classes to wigdet element.
     *
     * @param {String} classes CSS class(es)
     * @param {String} stateName State name for which classes should be added
     * @private
     */
    _applyClasses: function(classes, stateName) {
        this.__processClasses(classes, stateName, 'addClass');
    },

    /**
     * Unpplies CSS classes from wigdet element.
     *
     * @param {String} classes CSS class(es)
     * @param {String} stateName State name for which classes should be removed
     * @private
     */
    _unapplyClasses: function(classes, stateName) {
        this.__processClasses(classes, stateName, 'removeClass');
    },

    __processClasses: function(classes, stateName, action) {
        classes.split(/[ ]+/).forEach(function(cls) {
            if( cls ) {
                this.$el[action](cls);
                this.$el[action](cls + '--' + stateName);
            }
        }, this);
    },

    /**
     * Unapplies CSS state.
     * @param {String} name State name to be removed
     * @private
     */
    _unapplyState: function(name) {
        var baseState = $.extend({}, this.getBaseState());
        var state = $.extend({}, this.getCurrentState());

        var classes = (this.cssClass || '') + ' ' + (baseState.cssClass || '') + ' ' + (state.cssClass || '');
        this._unapplyClasses(classes, name);

        for( var i in baseState ) {
            baseState[i] = '';
        }

        for( var i in state ) {
            state[i] = '';
        }

        typeof baseState.unapplyState == 'function' ? baseState.unapplyState.call(this) : null;
        typeof state.unapplyState == 'function' ? state.unapplyState.call(this) : null;

        this.$el.css(this._cleanCss(baseState));
        this.$el.css(this._cleanCss(state));
        this.$el.css(this.cssStyle || {});
    },

    /**
     * Extends defined CSS state.
     * @param {String} name State name
     * @param {struct.CssStateObject} state Extending state object
     */
    extendState: function(name, state) {
        $.extend(this.getState(name), state)
    },

    /**
     * Extends base state ("*").
     * See: #extendState
     * @param {struct.CssStateObject} state Extending state object
     */
    extendBaseState: function(state) {
        this.extendState('*', state);
        this.resetCurrentState();
    },

    /**
     * Extends current state.
     * See: #extendState
     * @param {struct.CssStateObject} state Extending state object
     */
    extendCurrentState: function(state) {
        var fakeStateName = this.getService('random').getRandomId();
        this.setState(fakeStateName, $.extend({}, this.getCurrentState()));
        this.extendState(this._cssCurrentState, state);
        this._cssCurrentState = fakeStateName;
        this.resetCurrentState();
    }
};

/**
 * @class
 * Mixin for css-stateful widgets which have two states: shown and hidden.
 * Provides common methods for hiding and showing widget.
 * @extends app.common.mixins.Morphing
 */
app.common.mixins.Hidable = $.extend({}, app.common.mixins.Morphing, {

    /**
     * @inheritDoc
     */
    cssInitialState: 'shown',

    /**
     * Shows widget
     */
    show: function() {
        this.changeState('shown');
    },

    /**
     * Hides widget
     */
    hide: function() {
        this.changeState('hidden');
    },

    /**
     * Toggles widget visibility
     */
    toggle: function() {
        if( this.getCurrentStateName() != 'hidden' ) {
            this.hide();
        } else {
            this.show();
        }
    }
});
/**
 * @class
 * Mixin for widgets containing container. It is put in element with "ui-container-slot" class (configurable).
 */
app.common.mixins.WithContainer = {
    containerDescriptor: null,

    containerPlaceholder: '.ui-container',

    container: null,

    initializeWithContainerSupport: function(options) {
        this.initAttribute('containerDescriptor', options, {
            className: 'app.widgets.container.ContainerView ',
            model    : this.getModel().attributes
        }, {
            merge: true
        });

        this.container = app.getService('objects').widget(this.containerDescriptor);

        this.render = _.wrap(this.render, function(render) {
            render.call(this);
            this.$(this.containerPlaceholder).replaceWith(this.container.$el);
        });
    }
}
;app.common.mixins.WithErrorTemplate = {
    errorTemplate: 'core:Error',

    initializeWithErrorTemplate: function(options) {
        this.initAttribute('errorTemplate', options);

        this._renderTemplate = _.wrap(this._renderTemplate, function(renderTemplate){
            var model = this.getModel();
            if( model.hasErrors && model.hasErrors() ) {
                if( typeof this.errorTemplate == 'string' ) {
                    this.errorTemplate = app.getService('templates').createTemplateByName(this.errorTemplate);
                }
                var data = model.getErrors();
                var html = this.errorTemplate(data);
                this.$el.html(html);
            } else {
                renderTemplate.apply(this, _.rest(arguments));
            }
        });
    }
};/**
 * @class
 * Mixin adds support for Listjs
 */
app.common.mixins.WithListSupport = {

    /**
     * Listjs object.
     * @type {List}
     */
    list: null,

    /**
     * List options for Listjs object. For details, see docs on listjs.com.
     * @type {Object}
     */
    listOptions: null,

    initializeListSupport: function(options) {
        this.initAttribute('listOptions', options, {}, { merge: true });
        this.on('rendered', function() {
            this._createListObject();
        }.bind(this));
    },

    _createListObject: function() {
        this.list = new List(this.$el[0], this.listOptions);
    }
}
;app.common.mixins.WithTextTemplateFallback = {
    enhancedDataPath: '',

    initializeWithTextTemplateFallback: function(options) {
        this.initAttribute('enhancedDataPath', options);

        this._renderTemplate = _.wrap(this._renderTemplate, function(renderTemplate) {
            if( app.getService('objects').getObjectByPath(this.enhancedDataPath, this.getModel().attributes) ) {
                renderTemplate.apply(this, _.rest(arguments));
            } else {
                var textTemplate = app.getService('templates').createTemplateByName('core:Text');
                this.$el.html(textTemplate(this._getDataForTemplate()));
            }
        });
    }
};/**
 * @constructor
 * Production timer implementation. Does nothing.
 */
app.services.impl.NoopTimer = function() {
};

app.services.impl.NoopTimer.prototype.reset = function(name, data) {
};
app.services.impl.NoopTimer.prototype.probe = function(name, data) {
};
/**
 * @class
 * @singleton
 *
 * Production specific objects.
 *
 * @requires app.services.impl.NoopTimer
 */
app.prod = {};

app.services.timer = new app.services.impl.NoopTimer();/**
 * @class
 * @singleton
 * Namespace for basic response classes
 */
app.responses.base = {
    views: {},
    models: {}
};
/**
 * @class
 * @abstract
 * Model for item to be used in output area
 * @extends app.AbstractModel
 */
app.responses.base.models.AbstractItem = app.AbstractModel.extend({
    defaults: function() {
        return {
            area     : undefined,
            partition: 2
        };
    }
});
/**
 * @class
 * Model for command item (command line, mask).
 * @extends app.responses.base.models.AbstractItem
 */
app.responses.base.models.CommandItem = app.responses.base.models.AbstractItem.extend({
    defaults: function() {
        return {
            cmd : {
                tmplStr: '<input class="command-line-input" maxlength="{{cmdln.maxlength}}" placeholder="TYPE COMMAND HERE" type="text" id="{{cmdln.id}}" value="{{cmdln.value}}"/>'
            },
            disp: {
                tmplStr: '{{cmdln.value}}'
            },
            req : {
                tmplStr: '{{cmdln.value}}'
            },
            data: {
                cmdln: {value: '', type: 'text', id: 'cmdln', maxlength: 799}
            }
        };
    },

    /**
     * @returns {String} Command formatted to be displayed on screen
     */
    getDispText: function() {
        return this._getText(this.get('disp'));
    },

    /**
     * Load template, compiles it and renders text basing on model object.
     * @param {struct.TemplateDescriptor} obj Template descriptor
     * @returns {String} Processed and rendered string or null if Template descriptor was incorrect
     * @private
     */
    _getText: function(obj) {
        if( obj ) {
            var template;
            if( obj.tmplStr ) {
                template = app.getService('templates').createTemplate(obj.tmplStr);
            } else {
                template = app.getService('templates').createTemplateByName(obj.tmplName);
            }
            return template(this.get('data'));
        } else {
            return null;
        }
    },

    /**
     * @returns {String} Command line or mask formatted to be displayed in input area
     */
    getCmdText: function() {
        return this._getText(this.get('cmd'));
    },

    /**
     * @returns {String} Command formatted to be sent to host
     */
    getReqText: function() {
        return this._getText(this.get('req'));
    },

    /**
     * Sets command value for input with provided id
     * @param {String} id Input ID
     * @param {String} value Input value
     */
    setCmdValue: function(id, value) {
        var data = this.get('data');
        if( !data[id] ) {
            data[id] = {};
        }
        data[id].value = data[id].maxlength ? value.substr(0, data[id].maxlength) : value;
    },

    /**
     * Gets command value for input with provided id
     * @param {String} id Input ID
     * @returns {String} Input value
     */
    getCmdValue: function(id) {
        var data = this.get('data');
        if( !data[id] ) {
            return null;
        }
        return data[id].value;
    }
});
/**
 * @class
 * Response items list
 * @extends app.AbstractCollection
 * @requires app.responses.base.models.AbstractItem
 */
app.responses.base.models.OutputItems = app.AbstractCollection.extend({
    model: app.responses.base.models.AbstractItem
});
/**
 * @class
 * Model for response item
 * @extends app.responses.base.models.AbstractItem
 */
app.responses.base.models.ResponseItem = app.responses.base.models.AbstractItem.extend({
    defaults: function() {
        return {
            data: {},
            response: {}
        }
    },

    getWidgetModel: function() {
        return this.attributes.data;
    }
});
/**
 * @class
 * Request item widget
 * @extends app.AbstractView
 */
app.responses.base.views.AbstractItem = app.AbstractView.extend({
    /**
     * @inheritDoc
     */
    template: function() {
        var str = null;
        var model = this.getModel();

        if( model.getDispText ) {
            str = model.getDispText();
        }

        if( str === null ) {
            return app.AbstractView.prototype.template.apply(this, arguments);
        } else {
            return str;
        }
    }
});
/**
 * @class
 * Command item (command line, mask) widget to be rendered in (ex.) input area (AreaIn)
 * @extends app.AbstractView
 */
app.responses.base.views.CommandLine = app.AbstractView.extend({

    /**
     * @inheritDoc
     */
    template: function() {
        return this.getModel().getCmdText();
    }
});
/**
 * @class
 * Request item widget
 * @extends app.responses.base.views.AbstractItem
 */
app.responses.base.views.RequestItem = app.responses.base.views.AbstractItem.extend({
    /**
     * @inheritDoc
     */
    cssClass: 'dn-request-line'
});
/**
 * @class
 * Response item widget
 * @extends app.responses.base.views.AbstractItem
 */
app.responses.base.views.ResponseItem = app.responses.base.views.AbstractItem.extend({

    /**
     * @inheritDoc
     */
    cssClass: 'dn-response-line',

    initializeResponseWidget: function() {
        this._createWidget();
    },

    _createWidget: function() {
        this.widget = app.getService('dto').getDataView(this.getModel().getWidgetModel(), 'output');
    },

    render: function() {
        app.AbstractView.prototype.render.apply(this, arguments);

        if( this.widget ) {
            this.$el.append(this.widget.$el);
        }
    }
})
;
/**
 * @class
 * @singleton
 * Namespace for error response widget
 */
app.responses.error = {
    views: {},
    models: {}
};
/**
 * @class
 * Error response handling widget.
 * @extends app.AbstractView
 */
app.responses.error.views.Error = app.AbstractView.extend({
    template: 'core:Error'
});

app.getService('dto').registerDataView('app.common.data.dto.ErrorData', 'app.responses.error.views.Error', 'output');
/**
 * @class
 * @singleton
 * Namespace for text response widget
 */
app.responses.text = {
    views: {},
    models: {}
};
app.responses.text.models.Text = app.common.data.dto.ResponseData.extend({

});

app.getService('dto').registerDataModel(function(rawData){
    return rawData['d.Screen'] && !rawData['d.Structure'];
}, 'app.responses.text.models.Text');

/**
 * @class
 * Widget for handling text responses.
 * @extends app.AbstractView
 */
app.responses.text.views.Text = app.AbstractView.extend({
    /**
     * @inheritDoc
     */
    template: 'core:Text'
});

app.getService('dto').registerDataView('app.responses.text.models.Text', 'app.responses.text.views.Text', 'output');
/**
 * Service for authentication management in Dynamo.
 */
app.services.auth = {
    /**
     * Updates currently used ATH.
     * @param {String} ath ATH to be used as current ATH.
     */
    updateAth: function(ath) {
        app.config.ath = ath;
    }
}
;/**
 * @constructor
 */
app.services.impl.Connector = function() {
    this.send = function(cmdStr, sender) {
        var rspStr = this._sendReq(cmdStr);
        sender.handleRsp.call(sender, rspStr);
    };

    this._sendReq = function(req) {
        // dirty workaround
        // due to problem with signing jars with files with name containing 
        // special chars like CHANGE necessary is to map CHANGE(\u00A4) to "c" in mock file name 
        req = req.replace("\u00A4", "c");
        req = req.replace("*", "d");
        req = req.toLowerCase();
        var rspStr = $.ajax({
            url  : "mock/" + req + ".json",
            type : "GET",
            async: false
        }).responseText;

        return rspStr;
    };
};
/**
 * app.services.impl.Connector instance to be used by application.
 * @class
 * @singleton
 * @requires app.services.impl.Connector
 */
app.services.connector = new app.services.impl.Connector();
/**
 * @constructor
 * Service for handling application preferences.
 */
app.services.impl.Prefs = function() {
    this._full = true;
    this._separate = false;

    /**
     * Checks if application is in FULL mode.
     *
     * @returns {boolean} true for FULL mode, false for SPLIT
     */
    this.isFull = function() {
        return this._full;
    };

    /**
     * Switches to FULL or SPLIT mode.
     *
     * @param {boolean} full true for FULL, false for SPLIT
     */
    this.setFull = function(full) {
        this._full = full;
    };

    /**
     * Checks if application is in SEPARATE mode.
     *
     * @returns {boolean} true for SEPARATE mode, false for STREAM
     */
    this.isSeparate = function() {
        return this._separate;
    };

    /**
     * Switches to SEPARATE or STREAM mode.
     *
     * @param {boolean} separate true for SEPARATE, false for STREAM
     */
    this.setSeparate = function(separate) {
        this._separate = separate;
    };
};
/**
 * @constructor
 * Standard timer implementation, for development purposes.
 */
app.services.impl.StdTimer = function() {
};

/**
 * Timer objects
 * @type {Object}
 * @private
 */
app.services.impl.StdTimer.prototype._timers = {};

/**
 * Resets timer
 * @param {String} name Timer name
 * @param {Object} data Data associated with timer
 */
app.services.impl.StdTimer.prototype.reset = function(name, data) {

    if( !app.config.timer ) {
        return;
    }

    name = name || '';
    data = data || {};

    data._start = new Date().getTime();
    data._previous = data._start;
    data._name = name;

    this._timers[name] = data;
};

/**
 * Probes timer and logs time-delta between start (reset()) and current timestamp.
 * @param {String} name Timer name
 * @param {Object} data Additional data associated with timer
 */
app.services.impl.StdTimer.prototype.probe = function(name, data) {

    if( !app.config.timer ) {
        return;
    }

    name = name || '';
    data = data || {};

    if( !this._timers[name] ) {
        this.reset(name, data);
    }

    data = $.extend({}, this._timers[name], data);
    data._latest = new Date().getTime();
    data._deltaStart = data._latest - data._start;
    data._deltaPrevious = data._latest - data._previous;
    this._timers[name]._previous = data._latest;

    data.msg = typeof data.msg == 'string' ? data.msg : JSON.stringify(data.msg);

    app.getService('logger').info('app.services.impl.StdTimer delta', data, data._name, data._deltaStart, data._deltaPrevious, data.msg);
};
/**
 * @class
 * @singleton
 * Keys service provides API for interacting with keypress event, sabrish characters and key handling helpers.
 */
app.services.keys = {};

/**
 * @returns {Object} Mapping from ascii to sabrish
 */
app.services.keys.getKeyMap = function() {
    return app.services.keys._keyMap;
};

/**
 * Key mapping
 * @type {Object}
 * @private
 */
app.services.keys._keyMap = {
    "`"     : "^",
    "\'"    : "\u00A5",
    "_"     : "=",
    "="     : "*",
    "{"     : "[",
    "["     : "\u00A4",
    "}"     : "]",
    "]"     : "\u00B6",
    "|"     : "\\",
    "\\"    : "\u00A7",
    "\""    : ";",
    "\u00AC": "~",
    "\u00A3": "#"
};

/**
 * Converts ascii character, charcode or event object with charcode to sabrish character
 * @param {String|Number|Event} key Ascii character, its code or event object containing its code
 * @returns {String} Displayable sabrish character
 */
app.services.keys.getDisplayable = function(key) {
    key = this.getCharacter(key);
    return app.services.keys.getKeyMap()[key] || key;
};

/**
 * Converts displayable sabrish character to ascii character
 * @param {String} disp Sabrish character
 * @returns {String} Ascii character
 */
app.services.keys.getCharacterFromDisplayable = function(disp) {
    var keyMap = this.getKeyMap();
    for( var key in keyMap ) {
        if( disp == keyMap[key] ) {
            return key;
        }
    }
    return disp;
};

/**
 * Normalizes ascii character, charcode or event object with charcode to ascii character
 * @param {String|Number|Event} key Ascii character, its code or event object containing its code
 * @returns {String} Normalized ascii character
 */
app.services.keys.getCharacter = function(key) {
    return String.fromCharCode(this.getCharCode(key));
};

/**
 * Converts ascii character, charcode or event object with charcode to charcode
 * @param {String|Number|Event} key Ascii character, its code or event object containing its code
 * @returns {String} Ascii charcode
 */
app.services.keys.getCharCode = function(key) {
    if( typeof key === 'string' ) {
        key = key.charCodeAt(0);
    } else if( typeof key === 'object' ) {
        key = key.which;
    }
    return key;
};

/**
 * Checks if provided key is ENTER key
 * @param {String|Number|Event} key Key to be checked
 * @returns {boolean} True if provided key is ENTER
 */
app.services.keys.isEnter = function(key) {
    return this.getCharCode(key) === 13;
};
/**
 * @class
 * @singleton
 * Service for handling mobile devices
 */
app.services.mobile = {};

/**
 * Checks if device has touch functionality
 * @returns {boolean} Returns true if touching is possible
 */
app.services.mobile.isTouchDevice = function() {

    // escape for webdriver tests - HAVE TO be done better
    return false;

    try {
        document.createEvent("TouchEvent");
        return true;
    } catch( e ) {
        return false;
    }
};
/**
 * app.services.impl.Prefs service instance to be used by application
 * @class
 * @singleton
 * @requires app.services.impl.Prefs
 */
app.services.prefs = new app.services.impl.Prefs();
/**
 * @class
 * @singleton
 * Time logging service. Default timer class is app.services.impl.StdTimer
 *
 * @requires app.services.impl.StdTimer
 * @requires app.services.impl.NoopTimer
 */
app.services.timer = new app.services.impl.StdTimer();
/**
 * @class
 * Widget responsible for providing command line and masks to user, and gathering input from it.
 * @extends app.AbstractView
 */
app.widgets.console.AreaInView = app.AbstractView.extend({
    /**
     * @event submit
     * Fired when command or mask submit to host is requested
     */

    /**
     * DOM events binding.
     */
    events: {
        'click .send-button'              : 'processCmd',
        'keypress'                        : 'onKeypress',
        'change input'                    : 'onInputChange',
        'input input'                     : 'onInputChange',
        'click .change-split'             : '_changeSplit',
        'click .change-full'              : '_changeFull',
        'click .change-separate'          : '_changeSeparate',
        'click .change-stream'            : '_changeStream',
        'click .opt-cell input[value="E"]': '_actionE',
        'click .opt-cell input[value="A"]': '_actionA',
        'click .opt-cell input[value="B"]': '_actionB'
    },

    /**
     * Template for widget.
     * @type {String}
     */
    template: app.getService('templates').createTemplateByName('AreaInView'),

    /**
     * @constructor
     */
    initialize: function() {
        //this.setModel(this.getModel());
        this.listenTo(this.getModel(), 'change', this._renderForm);
        this.render();
        this._focusOnFirstInputIfDesktop();

        new app.widgets.areaChanger.views.AreaIndicator({el: this.$('.area-indicator-cell'), model: this.getModel()});
    },

    /**
     * Renders widget
     */
    render: function() {
        this._renderCompiledTemplate();
        this._renderForm();
    },

    /**
     * Compiles and renders template into element
     * @private
     */
    _renderCompiledTemplate: function() {
        this.$el.html(this.template(this.get('cmd').attributes));
    },

    /**
     * Renders inner form
     * @private
     */
    _renderForm: function() {
        //alert("render form")
        var cmdModel = this.get('cmd');
        new app.responses.base.views.CommandLine({model: cmdModel, el: this.$('.cmdForm')});
    },

    /**
     * Starts processing of command typed by user
     * @fires submit
     */
    processCmd: function() {
        this.updateModel();
        this.trigger('submit');
    },

    /**
     * Keypress event handler
     * @param {Event} e Keypress event
     */
    onKeypress: function(e) {
        // ENTER
        if( app.getService('keys').isEnter(e) ) {
            this.processCmd();
        } else if( e.charCode ) {
            this.insertCmdValue(e.target.id, app.getService('keys').getDisplayable(e));
            e.stopPropagation();
            e.preventDefault();
        }
    },

    /**
     * Input and change event handler.
     * @param {Event} e Input or change DOM event.
     */
    onInputChange: function(e) {
        this.updateModel();
    },

    /**
     * Updates model with data from view
     */
    updateModel: function() {
        var self = this;
        this._getAllInputs().each(function() {
            var o = $(this);
            var id = o.attr('id');
            self._setCmdModelValue(id, o.val());
        });
    },

    /**
     * Update view inputs with data from model
     */
    updateInputs: function() {
        var data = this.getCmdItem().get('data');
        for( var id in data ) {
            this._setCmdInputValue(id, data[id].value);
        }
    },

    /**
     * Sets command value for specific input.
     * When ID is not provided it uses first input.
     * @param {String} id Input ID (optional)
     * @param {String} value Input value
     */
    setCmdValue: function(id, value) {
        if( typeof value == 'undefined' ) {
            value = id;
            id = this._getFirstInputId();
        }
        this._setCmdModelValue(id, value);
        this.updateInputs();
    },

    /**
     * Gets command value for specific input.
     * When ID is not provided it uses first input.
     * @param {String} id Input ID (optional)
     * @returns {String} Input value
     */
    getCmdValue: function(id) {
        id = id || this._getFirstInputId();
        return this._getCmdModelValue(id);
    },

    /**
     * Appends value to specifig input.
     * When ID is not provided it uses first input.
     * @param {String} id Input ID (optional)
     * @param {String} value Input value
     */
    appendCmdValue: function(id, value) {
        if( typeof value == 'undefined' ) {
            value = id;
            id = this._getFirstInputId();
        }
        this._setCmdModelValue(id, this.getCmdValue(id) + value);
        this.updateInputs();
    },

    /**
     * Inserts value to specific input in position of cursor.
     * When ID is not provided it uses first input.
     * @param {String} id Input ID (optional)
     * @param {String} value Input value
     */
    insertCmdValue: function(id, value) {
        if( typeof value == 'undefined' ) {
            value = id;
            id = this._getFirstInputId();
        }

        var input = this.getInput(id);
        var currentValue = this.getCmdValue(id);
        var currentSelection = input.focus().getSelection();

        // setting value
        this._setCmdModelValue(id, currentValue.substring(0, currentSelection.start) + value + currentValue.substring(currentSelection.end, currentValue.length));
        this.updateInputs();

        // setting cursor
        var newCursorPosition = currentSelection.start + 1;
        input.setSelection(newCursorPosition, newCursorPosition);

        // scrolling input to proper char
        var firstVisibleCharIndex = this._getInputPosByChars(id);
        var inputCharCapacity = this._getInputWidthByChars(id);

        if( newCursorPosition - firstVisibleCharIndex >= inputCharCapacity ) {
            input.scrollLeft((newCursorPosition - inputCharCapacity) * this._getInputFontWidth(id) + 5);
        }
    },

    /**
     * Calculates width of the font used by given input. Caches results.
     * @param {String} id Input ID
     * @returns {Number} Width of font used by input
     * @private
     */
    _getInputFontWidth: function(id) {
        if( !this._inputFontWidthCache[id] ) {
            var tester = app.getService('dom').createElement('<span>M</span>')
                .css('font', this.getInput(id).css('font'))
                .css('opacity', 0)
                .css('position', 'absolute')
                .css('left', 0)
                .css('top', 0)
                .appendTo('body');
            this._inputFontWidthCache[id] = tester.width();
            tester.remove();
        }

        return this._inputFontWidthCache[id];
    },

    /**
     * Cache of font widths used by inputs
     */
    _inputFontWidthCache: {},

    /**
     * Counts number of characters that fits in input.
     * @param {String} id Input ID
     * @returns {number} Input width in characters
     * @private
     */
    _getInputWidthByChars: function(id) {
        return this.getInput(id).width() / this._getInputFontWidth(id);
    },

    /**
     * Counts which character starts input.
     * @param {String} id Input ID
     * @returns {number} Starting character number
     * @private
     */
    _getInputPosByChars: function(id) {
        return this.getInput(id).scrollLeft() / this._getInputFontWidth(id);
    },

    /**
     * Sets value to specific input in model only.
     * @param {String} id Input ID (optional)
     * @param {String} value Input value
     * @private
     */
    _setCmdModelValue: function(id, value) {
        this.getCmdItem().setCmdValue(id, value);
    },

    /**
     * Sets value to specific input in view only.
     * @param {String} id Input ID (optional)
     * @param {String} value Input value
     * @private
     */
    _setCmdInputValue: function(id, value) {
        this.getInput(id).val(value);
    },

    /**
     * Gets value from specific input in model only.
     * @param {String} id Input ID (optional)
     * @returns {String} Input value
     * @private
     */
    _getCmdModelValue: function(id) {
        return this.getCmdItem().getCmdValue(id);
    },

    /**
     * Gets value from specific input in view only.
     * @param {String} id Input ID (optional)
     * @returns {String} Input value
     * @private
     */
    _getCmdInputValue: function(id) {
        return this.getInput(id).val();
    },

    /**
     * Sets same value to all inputs.
     * @param {String} value Value for all inputs
     */
    setAllCmdValues: function(value) {
        for( var id in this.getCmdItem().get('data') ) {
            this.setCmdValue(id, value);
        }
    },

    /**
     * @returns {app.responses.base.models.CommandItem} Command item model associated with current input area
     */
    getCmdItem: function() {
        return this.get('cmd');
    },

    /**
     * Sets command item model for area input.
     * @param {app.responses.base.models.CommandItem} cmdItem Command item model
     */
    setCmdItem: function(cmdItem) {
        this.getModel().set('cmd', cmdItem);
    },

    /**
     * Delegates message to command item and returns formatted request text ready to be sent to host.
     * @returns {String} Formatted command
     */
    getReqText: function() {
        return this.getCmdItem().getReqText();
    },

    /**
     * @returns {jQuery} Form with command inputs
     * @private
     */
    _getInputsForm: function() {
        return this.$('.cmdForm');
    },

    /**
     * @returns {jQuery} All command inputs
     * @private
     */
    _getAllInputs: function() {
        return this._getInputsForm().find('input');
    },

    /**
     * Finds and returns input element with specified ID or first input if none provided.
     * @param {String} id Input ID (optional)
     * @returns {jQuery} Input element
     */
    getInput: function(id) {
        return typeof id == 'undefined' ? this._getFirstInput() : this._getInputsForm().find('#' + id);
    },

    /**
     * @returns {jQuery} First input found in inputs form
     * @private
     */
    _getFirstInput: function() {
        return $(this._getInputsForm().find('input')[0]);
    },

    /**
     * Focuses on first input
     * @private
     */
    _focusOnFirstInput: function() {
        this._getFirstInput().focus();
    },

    /**
     * Focuses on first input, on desktop only.
     * @private
     */
    _focusOnFirstInputIfDesktop: function() {
        if( !app.getService('mobile').isTouchDevice() ) {
            this._focusOnFirstInput();
        }
    },

    /**
     * @returns {String} First input's ID
     * @private
     */
    _getFirstInputId: function() {
        return this._getFirstInput().attr('id');
    },

    _actionE: function() {
        app.areaView._script_info();
    },

    _actionA: function() {
        app.areaView.sidepanel.toggle();
    },

    _actionB: function() {
        app.areaView._resolveCommand('trip');
    }
});
/**
 * @class
 * Model for working area and associated out and in areas
 * @extends app.AbstractModel
 * @requires app.responses.base.models.CommandItem
 * @requires app.responses.base.models.OutputItems
 */
app.widgets.console.AreaModel = app.AbstractModel.extend({
    defaults: function() {
        return {
            cmd            : new app.responses.base.models.CommandItem(),
            rsps           : new app.responses.base.models.OutputItems(),
            full           : true,
            separate       : false,
            activePartition: 2,
            area1          : "a",
            area2          : "a"
        };
    },

    getActivePartition: function() {
        return this.get("activePartition")
    },

    setActivePartition: function(part) {
        this.set({activePartition: part});
    },

    getActiveArea: function() {
        var p = this.get("activePartition");
        return p == 1 ? this.get("area1") : this.get("area2");
    },

    getInactiveArea: function() {
        var p = this.get("activePartition");
        return p == 1 ? this.get("area2") : this.get("area1");
    },

    isFull: function() {
        return this.get("full");
    },

    isSeparate: function() {
        return this.get("separate")
    },

    setSeparate: function(sep) {
        this.set({separate: sep});
    }
});

/**
 * @class
 * Widget for working area output
 * @extends app.AbstractView
 * @requires app.responses.base.views.ResponseItem
 */
app.widgets.console.AreaOutView = app.AbstractView.extend({
    events: {
        "mousedown .hsplit": "_dragStart",
        "click .splitpart1": "_focusPartition1",
        "click .splitpart2": "_focusPartition2"
    },

    /**
     * Template
     * @type {String}
     */
    template: app.getService('templates').createTemplateByName('AreaOutView'),

    /**
     * @constructor
     */
    initialize: function() {
        _.bindAll(this, '_dragMove', '_dragEnd');
        this.part1ItemViews = [];
        this.part2ItemViews = [];
        this.filterFactory = new app.widgets.console.ItemViewFilterFactory();
        this.render();

        this.listenTo(this.get('rsps'), 'add', this._renderItem);

        this._registerEventHandlers();
    },

    addItem: function(item) {
        this.get('rsps').add(item);
    },

    /**
     * Renders new item to element
     * @param {app.responses.base.models.AbstractItem } item Item model to be rendered
     */
    _renderItem: function(item) {
        var itemViewClass;

        if( item instanceof app.responses.base.models.CommandItem ) {
            itemViewClass = app.responses.base.views.RequestItem;
        } else {
            itemViewClass = app.responses.base.views.ResponseItem;
        }

        var rspItem1 = new itemViewClass({ model: item });
        this._getPartition1Container().append(rspItem1.$el);
        this.part1ItemViews.push(rspItem1);

        var rspItem2 = new itemViewClass({ model: item });
        this._getPartition2Container().append(rspItem2.$el);
        this.part2ItemViews.push(rspItem2);

        this.filter();
        this._scrollToBottom();
    },

    /**
     * Renders output widget.
     */
    render: function() {
        this.$el.html(this.template());

        var rsps = this.get('rsps');

        for( var i = 0; i < rsps.size(); i++ ) {
            this._renderItem(rsps.at(i), true);
        }
    },

    /**
     * Scrolls active partition output area to its bottom.
     */
    _scrollToBottom: function() {
        if( !this.getModel().isFull() ) {
            var c1 = this._getPartition1Container();
            c1.scrollTop(c1[0].scrollHeight);
        }
        var c2 = this._getPartition2Container();
        c2.scrollTop(c2[0].scrollHeight);
    },

    /**
     * Starts dragging partitions splitter.
     */
    _dragStart: function(event) {
        var element = $(event.target);
        this.dragInfo = {};
        this.dragInfo.element = element
        this.dragInfo.prevSize = element.prev().height();
        this.dragInfo.startPos = event.pageY;

        this.$el.bind("mousemove", this._dragMove);
        this.$el.bind("mouseup", this._dragEnd);
    },

    /**
     * Resizes paaertitions whan splitter is dragged.
     */
    _dragMove: function(event) {
        var curPos = event.pageY;
        var delta = curPos - this.dragInfo.startPos;
        var newPrevSize = this.dragInfo.prevSize + delta;

        this.dragInfo.element.prev().height(newPrevSize);
    },

    /**
     * Finishes partition resizing.
     */
    _dragEnd: function(event) {
        this.dragInfo = {};
        this.$el.unbind("mousemove", this._dragMove);
        this.$el.unbind("mouseup", this._dragEnd);
        window.getSelection().removeAllRanges();
    },

    /**
     * Sets first partition as active.
     */
    _focusPartition1: function() {
        this._focusPartition(1);
        //TODO change area
        //this.getModel().set({activePartition: 1})
    },

    /**
     * Sets second partition as active.
     */
    _focusPartition2: function() {
        this._focusPartition(2)
        //TODO change area
        //this.getModel().set({activePartition: 2})
    },

    /**
     * Handles switching between areas in SPLIT mode.
     */
    _focusPartition: function(newPart) {
        if( this.getModel().isFull() ) {
            return;
        }
        if( this.getModel().getActivePartition() == newPart ) {
            return;
        }
        var activeArea = this.getModel().getActiveArea();
        var newArea = this.getModel().getInactiveArea();
        this.getModel().set({activePartition: newPart});
        if( activeArea != newArea ) {
            app.areaView._script_changeArea(newArea);
        }
    },

    /**
     * Returns partition 1 DOM container.
     */
    _getPartition1Container: function() {
        return $(".splitpart1");
    },

    /**
     * Returns partition 2 DOM container.
     */
    _getPartition2Container: function() {
        return $(".splitpart2");
    },

    /**
     * Returns DOM element that contains responses in
     * currently active partition.
     */
    _getActivePartitionContainer: function() {
        var id = this.get("activePartition");
        return $(".splitpart" + id);
    },

    /**
     * Filters responses based on current settings: separate/stream mode and split/full.
     */
    filter: function() {
        var f1 = this.filterFactory.getFilter(this.getModel().isFull(), this.getModel().isSeparate(),
            this.get("area1"), this.get("area2"), 1);

        var f2 = this.filterFactory.getFilter(this.getModel().isFull(), this.getModel().isSeparate(),
            this.get("area1"), this.get("area2"), 2);

        this._filter(f1, this.part1ItemViews);
        this._filter(f2, this.part2ItemViews);

        this._scrollToBottom();
    },

    /**
     * Applies given filter.
     */
    _filter: function(filter, itemViews) {
        var filteredItemModels;

        if( Object.keys(filter).length == 0 ) {
            filteredItemModels = this.get("rsps").models;
        } else {
            filteredItemModels = this.get("rsps").where(filter);
        }

        for( var i = 0; i < itemViews.length; i++ ) {
            var v = itemViews[i];
            var m = v.getModel();
            var isIn = $.inArray(m, filteredItemModels) > -1;
            if( isIn ) {
                v.$el.show();
            } else {
                v.$el.hide();
            }
        }
    },

    onSendingRequest: function(commandItemModel) {
        this.addItem(commandItemModel);
    },

    onDataReceived: function(data, response) {
        if( data instanceof app.common.data.dto.ResponseData ) {
            this.addItem(new app.responses.base.models.ResponseItem({
                data    : data,
                response: response
            }));
        }
    },

    onErrorReceived: function(error, response) {
        this.addItem(new app.responses.base.models.ResponseItem({
            data    : error,
            response: response
        }));
    }
});
/**
 * @class
 * @singleton
 * Plugin for Sidepanel widget whicg contain additional informational widgets.
 */
app.widgets.sidepanel = {
    views: {}
};
/**
 * @class
 * Sidpanel widget.
 * @extends app.widgets.container.ContainerView
 * @mixins app.common.mixins.Hidable
 */
app.widgets.sidepanel.views.Sidepanel = app.widgets.container.ContainerView.extend(app.common.mixins.Hidable).extend({
    /**
     * @inheritDoc
     */
    cssClass: 'sidepanel',

    /**
     * @inheritDoc
     */
    cssInitialState: 'hidden',

    /**
     * @inheritDoc
     */
    template: 'sidepanel:Sidepanel'
});
/**
 * @class
 * @singleton
 * Plugin for Trip Summary widget shown in sidepanel.
 */
app.widgets.tripSummary = {
    views: {
        itineraryDetails: {},
        names           : {},
        phones          : {},
        sabreLocator    : {},
        ticketing       : {}
    }
};/**
 * @class
 * Trip summary widget.
 * @extends app.widgets.boxes.views.BoxGroup
 */
app.widgets.tripSummary.views.TripSummary = app.widgets.boxes.views.BoxGroup.extend({

    /**
     * @inheritDoc
     */
    updateEventName: 'travelitinerary',

    /**
     * @inheritDoc
     */
    sharedDataProperty: 'pnr',

    /**
     * @inheritDoc
     */
    cssClass: 'trip-summary ui-box-group',

    /**
     * @inheritDoc
     */
    initBoxGroup: function() {
        this.getModel().set('title', 'Trip Summary');
        this.addItem(new app.widgets.tripSummary.views.sabreLocator.SabreLocatorBox(), 'sabreLocator');
        this.addItem(new app.widgets.tripSummary.views.names.NamesBox(), 'names');
        this.addItem(new app.widgets.tripSummary.views.itineraryDetails.ItineraryDetailsBox(), 'itineraryDetails');
        this.addItem(new app.widgets.tripSummary.views.phones.PhonesBox(), 'phoneNumbers');
        this.addItem(new app.widgets.tripSummary.views.ticketing.TicketingBox(), 'tktTimeLimit');
    }
});
/**
 * @class
 * Working area widget
 * @extends app.AbstractView
 * @requires app.widgets.console.AreaModel
 * @requires app.widgets.console.AreaInView
 * @requires app.widgets.console.AreaOutView
 * @requires app.widgets.sidepanel.views.Sidepanel
 * @requires app.widgets.tripSummary.views.TripSummary
 * @uses app.common.data.dto.Response
 * @uses app.responses.base.models.CommandItem
 */
app.widgets.console.AreaView = app.AbstractView.extend({

    /**
     * @event sending-request
     * Fired before request is sent
     * @param {app.responses.base.models.CommandItem} command Command item object
     * @param {String} request Text command being sent to host
     */

    /**
     * Template for widget
     */
    template: app.getService('templates').createTemplateByName('AreaView'),

    /**
     * @event append-to-command
     * Fired when first input has to be focused and appended by character from keypress object.
     * @param {Event} event Keypress event
     */

    /**
     * @constructor
     */
    initialize: function() {
        this.render();
        this.areaOut = new app.widgets.console.AreaOutView({el: this.$('.areaout'), model: this.getModel()});
        this.areaIn = new app.widgets.console.AreaInView({el: this.$('.areain'), model: this.getModel()});

        this._initSidepanel();

        this.listenTo(this.areaIn, 'submit', this.submit);
        this.listenTo(this.getModel(), 'change', this._modelChangeHandler);

        this._registerEventHandlers();

        this.on('append-to-command', this._appendToCommand);
        this._listenToDocument();

        this._adjustOutputHeightToInputHeight();
    },

    /**
     * Initializes sidepanel.
     * @private
     */
    _initSidepanel: function() {
        this.sidepanel = new app.widgets.sidepanel.views.Sidepanel();
        this.sidepanel.$el.appendTo(this.$('.working-area'));
        this.sidepanel.addItem(new app.widgets.tripSummary.views.TripSummary({ dispatcher: this }));

        this.listenTo(this.sidepanel, 'state-changed', this._sidepanelStateChanged);
    },

    /**
     * Sidepanel's state change event handler
     * @param {String} stateName New state name
     * @private
     */
    _sidepanelStateChanged: function(stateName) {
        this.$('.areaout').css({
            right          : (stateName == 'shown' ? '380px' : '0'),
            'border-radius': (stateName == 'shown' ? '0 7px 0 7px' : '0')
        });
        this._adjustOutputHeightToInputHeight();
    },

    /**
     * @fires append-to-command
     * @private
     * Binds proper events to document
     */
    _listenToDocument: function() {
        var self = this;
        $(document).keypress(function(e) {
            if( e.charCode ) {
                self.trigger('append-to-command', e);
            }
        });
    },

    /**
     * Handles model change event.
     * @param {Backbone.Model} model Changed model
     * @private
     */
    _modelChangeHandler: function(model) {
        this.$('.splitpart1, .splitpart2').css('opacity', 0.5);
        this.$('.splitpart' + model.getActivePartition()).css('opacity', 1);
    },

    /**
     * Listens for "submit" events (when cmdline/mask is submited).
     */
    submit: function() {
        var cmd = this.areaIn.getCmdItem();
        this.areaIn.setCmdItem(new app.responses.base.models.CommandItem({}));
        this.send(cmd);
    },

    /**
     * Sends request.
     * @fires sending-request
     * @param {app.responses.base.models.CommandItem} cmd item to send
     */
    send: function(cmd) {
        var req = cmd.getReqText().trim();
        if( req ) {
            cmd.set({area: this.getModel().getActiveArea(), partition: this.getModel().getActivePartition()});

            this.areaIn.setCmdItem(new app.responses.base.models.CommandItem({}));

            app.getService('logger').info('Sending command', req, {
                request: req,
                command: cmd
            });

            app.eventBus.trigger('sending-request', cmd, req);

            app.getService('connector').send(req, this);

        } else {
            app.getService('logger').info('Cannot send command', req, {
                request: req,
                command: cmd
            });
        }
    },

    /**
     * Host response handler
     * @fires response-received
     * @param {String} responseText Serialized response
     */
    handleRsp: function(responseText) {
        try {
            app.getService('logger').info('Handling response', responseText );

            var responseJson;

            try {
                responseJson = typeof responseText == 'object' ? responseText : JSON.parse(responseText)
            } catch( e ) {
                responseJson = null;
            }

            if( responseJson == null ) {
                app.eventBus.trigger('response-received', new app.common.data.dto.MalformedResponse({ responseText: responseText }));
            } else {
                if( !responseJson.ack ) {
                    app.eventBus.trigger('response-received', new app.common.data.dto.Response(responseJson));
                }
            }
        } catch( e ) {
            app.getService('logger').severe('Command handling error', e.message, responseText);
            throw e;
        } finally {
            this.areaIn._focusOnFirstInputIfDesktop();
            this._adjustOutputHeightToInputHeight();
        }
    },

    /**
     * Adjusts output field height according to bottom's height.
     * @private
     */
    _adjustOutputHeightToInputHeight: function() {
        this.areaOut.$el.css('bottom', this.areaIn.$el.height());
        this.sidepanel.$el.css('bottom', this.areaIn.$el.height());
    },

    /**
     * Renders widget
     */
    render: function() {
        this.$el.html(this.template());
    },

    /**
     * Handler for appending some value to command
     * @param {Event} e Keypress event
     * @private
     */
    _appendToCommand: function(e) {
        if( e.target.nodeName.toLowerCase() !== 'input' ) {
            this.areaIn._focusOnFirstInputIfDesktop();
            this.areaIn.appendCmdValue(app.getService('keys').getDisplayable(e));
            e.preventDefault();
            e.stopPropagation();
        }
    },

    //TODO methods with "acript" prefix will be moved to separate class

    /**
     * Performes UI changes when area was changed.
     *
     * @param area name of new area
     */
    _script_areaChanged: function(area) {
        area = area.toLowerCase();
        var m = this.getModel();

        if( !m.isFull() ) {
            var area1;
            var area2;
            if( m.getActivePartition() == 1 ) {
                area1 = area;
                area2 = m.get("area2");
            } else {
                area1 = m.get("area1");
                area2 = area;
            }
            this._script_split(area1, area2);
        } else {
            this._script_full(area);
        }
    },

    /**
     * Sends change request to the host. All UI changes related to
     * area changing is done when response is received.
     *
     * @param area name of new area
     */
    _script_changeArea: function(area) {
        var cmd = new app.responses.base.models.CommandItem();
        cmd.get('data').cmdln.value = "\u00A4" + area;
        this.send(cmd);
    },

    /**
     * Changes from FULL to SPLIT mode.
     */
    _script_split: function(top, bottom) {
        if( !top ) {
            top = this.getModel().getActiveArea();
        }

        if( !bottom ) {
            bottom = top;
        }
        top = top.toLowerCase();
        bottom = bottom.toLowerCase();

        $(".splitpart1").show()
        $(".splitter").show();

        var y = this.$el.height();
        $(".splitpart1").height(y / 2);

        this.getModel().set({full: false, area1: top, area2: bottom});
        this.areaOut.filter();
        app.getService("prefs").setFull(false);
    },

    /**
     * Changes from SPLIT to FULL mode.
     */
    _script_full: function(id) {
        if( !id ) {
            id = this.getModel().getActiveArea();
        } else {
            id = id.toLowerCase();
        }

        this.getModel().set({area2: id, full: true, activePartition: 2});

        $(".splitpart1").hide()
        $(".splitter").hide();

        this.areaOut.filter();
        app.getService("prefs").setFull(true);
    },

    /**
     * Switches to SEPARATE mode.
     */
    _script_separate: function() {
        this.getModel().setSeparate(true);
        app.areaView.areaOut.filter();
        app.getService("prefs").setSeparate(true);
    },

    /**
     * Switches to STREAM mode.
     */
    _script_stream: function() {
        this.getModel().setSeparate(false);
        app.areaView.areaOut.filter();
        app.getService("prefs").setSeparate(false);
    },

    /**
     * Switches focus between partitions in split mode.
     *
     * @param part name of te partition (1,2)
     */
    _script_partition: function(part) {
        if( this.getModel().isFull() ) {
            return;
        }
        this.getModel().setActivePartition(part);
    },

    /**
     * Shows diagnostic info
     * @private
     */
    _script_info: function() {
        var doc = $(document);
        var win = $(window);
        var ap = $('.app');
        var out = $('.out');
        var bot = $('.bottom');

        function dimensions(o) {
            try {
                return o.width() + ' x ' + o.height() + ' / ' + o.css('width') + ' x ' + o.css('height') + ' / ' + o.css('top') + '|' + o.css('right') + '|' + o.css('bottom') + '|' + o.css('left');
            } catch( e ) {
                return o.width() + ' x ' + o.height();
            }
        }

        var infoObject = {
            docDimensions: dimensions(doc),
            winDimensions: dimensions(win),
            appDimensions: dimensions(ap),
            outDimensions: dimensions(out),
            botDimensions: dimensions(bot),
            userAgent    : navigator.userAgent,
            language     : navigator.language,
            platform     : navigator.platform,
            online       : navigator.onLine,
            isTouchDevice: app.getService('mobile').isTouchDevice()
        }

        var info = [];

        info.push('** DIAGNOSTICS **');

        for( var i in infoObject ) {
            info.push(i + ' = ' + infoObject[i]);
        }

        this._addRawTextResponse(info.join('\n'));
    },

    /**
     * Puts text directly to output field.
     * @param {String} content Text content
     * @private
     */
    _addRawTextResponse: function(content) {
        this.areaOut.addItem({
            type     : 'rsp',
            disp     : {
                tmplName: 'text'
            },
            data     : {
                "content": content
            },
            area     : this.getModel().getActiveArea(),
            partition: this.getModel().getActivePartition()
        });
    },

    onResponseReceived: function(response) {
        app.getService('logger').info('Response received', response.attributes );

        response.getDataObjects().forEach(function(data) {
            app.eventBus.trigger('data-received', data, response);
        }, this);

        response.getErrors().forEach(function(error) {
            app.eventBus.trigger('error-received', error, response);
        }, this);
    },

    onErrorReceived: function(error, response) {
        app.getService('logger').severe('Error received', error.getMessage(), error.getCode(), error.getData());
    }
});
/**
 * @constructor
 * Service for dealing with templates
 */
app.widgets.console.ItemViewFilterFactory = function() {

    /**
     * Returns filter for given parameters.
     *
     * @param {Boolean} isFull full/split mode indicator
     * @param {Boolean} isSeparate separate/stream mode indicator
     * @param {String} area1 area name in partition 1 (a-f)
     * @param {String} area2 area name in partition 2 (a-f)
     * @param {String} partition name of the partition on which filter will be applied (1-2)
     */
    this.getFilter = function(isFull, isSeparate, area1, area2, partition) {
        var filter = {};

        if( isFull ) {
            if( isSeparate ) {
                return this._getFullSeparateFilter(area2);
            } else {
                return this._getFullStreamFilter();
            }
        } else {
            if( isSeparate ) {
                return this._getSplitSeparateFilter(area1, area2, partition)
            } else {
                return this._getSplitStreamFilter(partition)
            }
        }
    }

    this._getFullSeparateFilter = function(area2) {
        return {area: area2};
    }

    this._getFullStreamFilter = function() {
        return {};
    }

    this._getSplitSeparateFilter = function(area1, area2, partition) {
        if( area1 == area2 ) {
            return {area: area1, partition: partition};
        } else {
            var a = partition == 1 ? area1 : area2;
            return {area: a};
        }
    }

    this._getSplitStreamFilter = function(partition) {
        return {partition: partition};
    }
};/**
 * @class
 * @singleton
 * Plugin for CPA enhanced view handling
 */
app.responses.cpa = {
    views : {},
    models: {}
};
/**
 * @class
 * Main CPA response model.
 * @extends app.AbstractModel
 * @requires app.services.dates
 */
app.responses.cpa.models.Cpa = app.common.data.dto.UsgResponseData.extend({
    /**
     * @inheritDoc
     */
    initialize: function(data) {
        app.common.data.dto.UsgResponseData.prototype.initialize.apply(this, arguments);

        var aaResponse = data['d.Structure']['o.ExtensionPoint_Summary']['dx.OTA_AirAvailRS'][0];

        if( aaResponse['dx.OriginDestinationOptions'] &&
            aaResponse['dx.OriginDestinationOptions']['dx.OriginDestinationOption'] ) {
            
            var dates = app.getService('dates');

            var firstSegment = (new app.common.data.flight.FlightSubsegment(aaResponse['dx.OriginDestinationOptions']
                ['dx.OriginDestinationOption'][0]['dx.FlightSegment'][0])).attributes;

            var originTimezone = aaResponse['dx.OriginDestinationOptions']['@OriginTimeZone'];
            var originDate = firstSegment['@DepartureDateTime'];

            var destinationTimezone = aaResponse['dx.OriginDestinationOptions']['@DestinationTimeZone'];
            var destinationDate = firstSegment['@DepartureDateTime'];

            var originShift = dates.getHourShiftFromTimezoneName(originTimezone, originDate);
            var destinationShift = dates.getHourShiftFromTimezoneName(destinationTimezone, destinationDate);

            var shiftDiff = destinationShift - originShift;

            var connections = new app.common.data.flight.FlightConnections(
                aaResponse['dx.OriginDestinationOptions']['dx.OriginDestinationOption'].map(function(item) {
                    return app.common.data.flight.FlightConnection.createFromSegments(item['dx.FlightSegment']);
                })
            );

            this.set({
                firstSegment                 : firstSegment,
                formattedOriginTimeZone      : originTimezone,
                formattedDestinationTimeZone : destinationTimezone,
                formattedOriginTimeShift     : originShift,
                formattedDestinationTimeShift: destinationShift,
                formattedShiftDifference     : shiftDiff,
                connections                  : connections,
                rows                         : new app.responses.cpa.models.CpaRows(connections.getFlightSegments().serialize())
            });
        }
    }
});

app.getService('dto').registerDataModel(function(rawData) {
    return rawData['d.Structure'] && rawData['d.Structure']['o.ExtensionPoint_Summary']['dx.OTA_AirAvailRS'];
}, 'app.responses.cpa.models.Cpa');
/**
 * @class
 * Model for single row of CPA response
 * @extends app.AbstractModel
 */
app.responses.cpa.models.CpaRow = app.AbstractModel.extend({
});
/**
 * @class
 * Collection of rows shipped with CPA response.
 * @extends app.AbstractCollection
 * @requires app.responses.cpa.models.CpaRow
 */
app.responses.cpa.models.CpaRows = app.AbstractCollection.extend({
    model: app.responses.cpa.models.CpaRow
});
/**
 * @class
 * View used to present CPA response.
 * @extends app.widgets.container.ContainerView
 * @requires app.responses.cpa.models.Cpa
 */
app.responses.cpa.views.Cpa = app.widgets.container.ContainerView
    .extend(app.common.mixins.WithTextTemplateFallback)
    .extend({
        /**
         * @inheritDoc
         */
        enhancedDataPath: '[d.Structure].[o.ExtensionPoint_Summary].[dx.OTA_AirAvailRS].[0].[dx.OriginDestinationOptions].[dx.OriginDestinationOption]',

        /**
         * @inheritDoc
         */
        template: 'cpa:Cpa',

        /**
         * @inheritDoc
         */
        modelDescriptor: {
            className: 'app.responses.cpa.models.Cpa'
        },

        /**
         * @inheritDoc
         */
        cssClass: 'cpa',

        /**
         * @inheritDoc
         */
        itemsProperty: 'rows',

        /**
         * @inheritDoc
         */
        itemDescriptor: {
            className: 'app.responses.cpa.views.CpaRow'
        }
    });

app.getService('dto').registerDataView('app.responses.cpa.models.Cpa', 'app.responses.cpa.views.Cpa', 'output');

/**
 * @class
 * @singleton
 *
 * Drawer widget namespace.
 */
app.widgets.drawer = {
    mixins: {},
    views : {}
}
;/**
 * @class
 * Mixin for adding drawer to other widgets.
 *
 * It sticks drawer after parent widget.
 *
 * Please refer to [Drawer Guide](#!/guide/drawer_guides_overview)
 */
app.widgets.drawer.mixins.WithDrawer = {

    /**
     * Descriptor for drawer widget that should be created
     * @type {struct.WidgetDescriptor}
     */
    drawerDescriptor: null,

    /**
     * Path indicating where to find model for drawer in parent widget's model.
     */
    drawerModelPath: '',

    /**
     * @constructor
     * @param {struct.WidgetOptions} options Drawer options
     */
    initializeWithDrawer: function(options) {
        this.initAttribute('drawerDescriptor', options, {
            className: 'app.widgets.drawer.views.Drawer'
        }, {
            merge: true,
            deep : true
        });

        this.initAttribute('drawerModelPath', options);
    },

    /**
     * Opens/closes drawer
     */
    clopenDrawer: function() {
        if( !this.drawer ) {
            this._createDrawer();
        }

        this.drawer.clopen();
    },

    /**
     * Opens drawer
     */
    openDrawer: function() {
        if( !this.drawer ) {
            this._createDrawer();
        }

        this.drawer.open();
    },

    /**
     * Closes drawer
     */
    closeDrawer: function() {
        if( !this.drawer ) {
            this._createDrawer();
        }

        this.drawer.close();
    },

    /**
     * Creates drawer.
     *
     * Drawer is lazily initialized, so it is created when needed.
     *
     * @private
     */
    _createDrawer: function() {
        var objects = app.getService('objects');

        this.drawer = objects.widget($.extend({
            model: objects.getObjectByPath(this.drawerModelPath, this.getModel())
        }, this.drawerDescriptor));

        this.$el.append(this.drawer.$el);

        this.listenTo(this.drawer, 'opened', function() {
            this.$('.cpa-drawer-arrow').removeClass('rotated0').addClass('rotated90');
        }.bind(this));

        this.listenTo(this.drawer, 'closed', function() {
            this.$('.cpa-drawer-arrow').removeClass('rotated90').addClass('rotated0');
        }.bind(this));
    }
};
/**
 * @class
 * View used to present one CPA response row.
 * @extends app.AbstractView
 * @mixins app.widgets.drawer.mixins.WithDrawer
 * @requires app.responses.cpa.models.CpaRow
 */
app.responses.cpa.views.CpaRow = app.AbstractView
    .extend(app.widgets.drawer.mixins.WithDrawer)
    .extend({

        /**
         * @inheritDoc
         */
        template: 'cpa:CpaRow',

        /**
         * @inheritDoc
         */
        cssClass: 'cpa-row',

        /**
         * @inheritDoc
         */
        modelDescriptor: {
            className: 'app.responses.cpa.models.CpaRow'
        }
    });
/**
 * @class
 *
 * Drawer widget class.
 *
 * Please refer to [Drawer Guide](#!/guide/drawer_guides_overview)
 *
 * @extends app.widgets.container.ContainerView
 * @mixins app.common.mixins.Closable
 */
app.widgets.drawer.views.Drawer = app.widgets.container.ContainerView
    .extend(app.common.mixins.Closable)
    .extend({

        /**
         * @inheritDoc
         */
        template: 'drawer:Drawer',

        /**
         * @inheritDoc
         */
        initialCloseAction: 'close',

        /**
         * @inheritDoc
         */
        cssClass: 'drawer',

        /**
         * Pool for drawers of same type.
         *
         * When drawer is opened, other drawers should be closed. Pool allows to control that behaviour and to make groups of drawers if needed.
         */
        drawersPool: [],

        /**
         * @inheritDoc
         * @constructor
         */
        initialize: function(options) {
            app.widgets.container.ContainerView.prototype.initialize.apply(this, arguments);
            this.initAttribute('drawersPool', options);
            this.drawersPool.push(this);
        },

        /**
         * Opens drawer and closes other drawer from same #drawersPool
         */
        open: function() {
            this.drawersPool.forEach(function(drawer) {
                drawer.close();
            });
            app.common.mixins.Closable.open.apply(this, arguments);
        }
    });
app.widgets.tripSummary.views.itineraryDetails.ArunkSegmentRow = app.AbstractView.extend({
    format: '{{rph}}. ARNK'
});
app.widgets.tripSummary.views.itineraryDetails.FlightSegmentRow = app.AbstractView.extend({
    template: 'tripSummary:FlightSegmentRow'
});
app.widgets.tripSummary.views.itineraryDetails.HotelSegmentRow = app.AbstractView.extend({
    template       : 'tripSummary:HotelSegmentRow',
    modelDescriptor: {
        className: 'app.common.data.hotel.HotelSegment'
    }
});
app.widgets.tripSummary.views.itineraryDetails.ItineraryDetailsBox = app.widgets.boxes.views.Box.extend({
    itemsProperty             : 'pnr.travelitinerary.travelItinerary.itineraryInfo.reservationItems.item',
    itemPreprocessorDescriptor: {
        className: 'app.widgets.tripSummary.views.itineraryDetails.ItineraryDetailsBox.ItemPreprocessor'
    },
    cssClass                  : 'ui-box itinerary-details-box',
    model                     : {
        title       : 'Itinerary Details',
        'show-count': true
    }
});

/**
 * @class
 * @extends app.widgets.container.ContainerView.Preprocessors.Standard
 *
 * Item preprocessor used by it. details. Chooses and prepares rows to be displayed properly.
 */
app.widgets.tripSummary.views.itineraryDetails.ItineraryDetailsBox.ItemPreprocessor = app.widgets.container.ContainerView.Preprocessors.Standard.extend({
    /**
     * Preprocesses item. Target widget is view for proper row chosen by data structure.
     *
     * @param {*} item Item to be preprocessed
     * @param {app.widgets.container.ContainerView} context Container used to show items
     * @returns {app.AbstractView} Normalized widget
     */
    preprocessItem: function(item, context) {

        var commonModel = { rph: item.rph };

        if( item.arunk ) {
            return new app.widgets.tripSummary.views.itineraryDetails.ArunkSegmentRow({ model: commonModel });
        } else if( item.flightSegment ) {
            var segment = app.common.data.flight.FlightSegment.createFromSubsegments(item.flightSegment);
            segment.set(commonModel);
            return new app.widgets.tripSummary.views.itineraryDetails.FlightSegmentRow({ model: segment });
        } else if( item.hotel ) {
            return new app.widgets.tripSummary.views.itineraryDetails.HotelSegmentRow({ model: $.extend({}, commonModel, item.hotel) });
        } else if( item.vehicle ) {
            return new app.widgets.tripSummary.views.itineraryDetails.VehicleSegmentRow({ model: $.extend({}, commonModel, item.vehicle) });
        }

        return app.widgets.container.ContainerView.Preprocessors.Standard.prototype.preprocessItem.call(this, item, context);
    }
});
app.widgets.tripSummary.views.itineraryDetails.VehicleSegmentRow = app.AbstractView.extend({
    template       : 'tripSummary:VehicleSegmentRow',
    modelDescriptor: {
        className: 'app.common.data.vehicle.VehicleSegment'
    }
});
app.widgets.tripSummary.views.names.NamesBox = app.widgets.boxes.views.Box.extend({
    itemsProperty : 'pnr.travelitinerary.travelItinerary.customerInfo.personName',
    modelList     : true,
    itemDescriptor: {
        format: '<div class="flex-container"><div class="rph">{{trim-leading-zeros nameNumber}}</div><div class="flex-block">{{surname}} {{givenName}} {{passengerType}}{{#if nameReference}} ref. {{nameReference}}{{/if}}</div>'
    },

    model: {
        title       : 'Name(s)',
        'show-count': true
    }
});
app.widgets.tripSummary.views.phones.PhonesBox = app.widgets.boxes.views.Box.extend({
    itemsProperty : 'pnr.travelitinerary.travelItinerary.customerInfo.contactNumbers.contactNumber',
    modelList     : true,
    itemDescriptor: {
        format: '<div class="flex-container"><div class="rph">{{printf "%d" rph}}.</div><div class="flex-block">{{phone}}</div>'
    },

    model: {
        title       : 'Phone Numbers',
        'show-count': true
    }
});
/**
 * @class
 * Widget for Sabre Locator presentation in Trip Summary
 */
app.widgets.tripSummary.views.sabreLocator.SabreLocatorBox = app.AbstractView.extend({
    /**
     * @inheritDoc
     */
    template: 'tripSummary:SabreLocatorBox',

    /**
     * @inheritDoc
     */
    cssClass: 'sabre-locator-box',

    /**
     * @inheritDoc
     */
    model: {
        title: 'Sabre Locator'
    },

    /**
     * @constructor
     * @inheritDoc
     */
    initialize: function() {
        app.AbstractView.prototype.initialize.apply(this, arguments);
        this.listenTo(this.getModel(), 'change', this.render);
    }
});
app.widgets.tripSummary.views.ticketing.TicketingBox = app.widgets.boxes.views.Box.extend({
    itemsProperty : 'pnr.travelitinerary.travelItinerary.itineraryInfo.ticketing',
    modelList     : true,
    itemDescriptor: {
        format: '<div class="flex-container"><div class="rph">{{printf "%d" rph}}.</div><div class="flex-block">{{ticketTimeLimit}}{{eticketNumber}}</div>'
    },
    model         : {
        title       : 'TKT/Time Limit',
        'show-count': true
    }
});
