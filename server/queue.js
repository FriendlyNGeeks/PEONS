// This widget contains content of a widget from @lx which was an inspiration for this widget. 
// Thank you very much @thefyrewire and @lx for helping me with this widget.

/* global define, Promise */
(function (root, factory) {
    'use strict';
    if (typeof module === 'object' && module.exports && typeof require === 'function') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && typeof define.amd === 'object') {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals
        root.Queue = factory();
    }
})
(this, function () {
    'use strict';

    /**
     * @return {Object}
     */
    var LocalPromise = typeof Promise !== 'undefined' ? Promise : function () {
        return {
            then: function () {
                throw new Error('Queue.configure() before use Queue');
            }
        };
    };

    var noop = function () {};

    /**
     * @param {*} value
     * @returns {LocalPromise}
     */
    var resolveWith = function (value) {
        if (value && typeof value.then === 'function') {
            return value;
        }

        return new LocalPromise(function (resolve) {
            resolve(value);
        });
    };

    /**
     * It limits concurrently executed promises
     *
     * @param {Number} [maxPendingPromises=Infinity] max number of concurrently executed promises
     * @param {Number} [maxQueuedPromises=Infinity]  max number of queued promises
     * @constructor
     *
     * @example
     *
     * var queue = new Queue(1);
     *
     * queue.add(function () {
     *     // resolve of this promise will resume next request
     *     return downloadTarballFromGithub(url, file);
     * })
     * .then(function (file) {
     *     doStuffWith(file);
     * });
     *
     * queue.add(function () {
     *     return downloadTarballFromGithub(url, file);
     * })
     * // This request will be paused
     * .then(function (file) {
     *     doStuffWith(file);
     * });
     */
    function Queue(maxPendingPromises, maxQueuedPromises, options) {
        this.options = options = options || {};
        this.pendingPromises = 0;
        this.maxPendingPromises = typeof maxPendingPromises !== 'undefined' ? maxPendingPromises : Infinity;
        this.maxQueuedPromises = typeof maxQueuedPromises !== 'undefined' ? maxQueuedPromises : Infinity;
        this.queue = [];
    }

    /**
     * Defines promise promiseFactory
     * @param {Function} GlobalPromise
     */
    Queue.configure = function (GlobalPromise) {
        LocalPromise = GlobalPromise;
    };

    /**
     * @param {Function} promiseGenerator
     * @return {LocalPromise}
     */
    Queue.prototype.add = function (promiseGenerator) {
        var self = this;
        return new LocalPromise(function (resolve, reject, notify) {
            // Do not queue to much promises
            if (self.queue.length >= self.maxQueuedPromises) {
                reject(new Error('Queue limit reached'));
                return;
            }

            // Add to queue
            self.queue.push({
                promiseGenerator: promiseGenerator,
                resolve: resolve,
                reject: reject,
                notify: notify || noop
            });
            function wait(ms)
            {
                var d = new Date();
                var d2 = null;
                do { d2 = new Date(); }
                while(d2-d < ms);
            }
            //wait(1000);
            //var timeout = document.getElementById("sfxCommand");
            
            //timeout.load();
            //wait(1000);
            //timeout.play();
            self._dequeue();
           
        });
    };

    /**
     * Number of simultaneously running promises (which are resolving)
     *
     * @return {number}
     */
    Queue.prototype.getPendingLength = function () {
        return this.pendingPromises;
    };

    /**
     * Number of queued promises (which are waiting)
     *
     * @return {number}
     */
    Queue.prototype.getQueueLength = function () {
        return this.queue.length;
    };

    /**
     * @returns {boolean} true if first item removed from queue
     * @private
     */
    Queue.prototype._dequeue = function () {
        var self = this;
        if (this.pendingPromises >= this.maxPendingPromises) {
            return false;
        }

        // Remove from queue
        var item = this.queue.shift();
        if (!item) {
            if (this.options.onEmpty) {
                this.options.onEmpty();
            }
            return false;
        }

        try {
            
            this.pendingPromises++;

            resolveWith(item.promiseGenerator())
            // Forward all stuff
                .then(function (value) {
                    // It is not pending now
                    self.pendingPromises--;
                    // It should pass values
                    item.resolve(value);
                    self._dequeue();
                }, function (err) {
                    // It is not pending now
                    self.pendingPromises--;
                    // It should not mask errors
                    item.reject(err);
                    self._dequeue();
                }, function (message) {
                    // It should pass notifications
                    item.notify(message);
                });
        } catch (err) {
            self.pendingPromises--;
            item.reject(err);
            self._dequeue();

        }

        return true;
    };

    return Queue;
});
/////////////////////////////////////////////////////////////
////////////////////////Customize////////////////////////////
/////////////////////////////////////////////////////////////

let userOptions = {};
let channels = [];
let cmdArray = [];

// Or just Queue.configure(window.Promise);
Queue.configure(function (handler) {
    var dfd = $.Deferred();
    try {
        handler(dfd.resolve, dfd.reject, dfd.progress);
    } catch (e) {
        dfd.reject(e);
    }
    return dfd.promise();
});

// max concurrent - 1
// max queue - 10
var queue = new Queue(1, 50);


window.addEventListener('onWidgetLoad', function (obj) {
    userOptions = obj['detail']['fieldData'];
    userOptions['channelName'] = obj['detail']['channel']['username'];
    userOptions['otherUsers'] = (userOptions['otherUsers'].toLowerCase()).replace(/\s/g,'').split(",");
    $("#sfxCommand").hide();
});

window.addEventListener('onEventReceived', function (object) {

    var obj = object;
  function queuesong() {
    var dfd = $.Deferred();
    if (obj.detail.listener !== 'message') return;
    let data = obj.detail.event.data;
    let message = data['text'].toLowerCase();
    for (var i = 1; i <= 50; i++) {
      if (message.includes(userOptions['command' + [i] + ''])){
        console.log("CMD <" + message + "> found");
        let user = data['nick'].toLowerCase();

        //Preparing userState object containing all user flags
        let userState = {
            'mod': parseInt(data.tags.mod),
            'sub': parseInt(data.tags.subscriber),
            'vip': (data.tags.badges.indexOf("vip") !== -1),
            'broadcaster': (user === userOptions['channelName'])
        };
      
        let sfx = $("#sfxCommand");
        let sfxjava = document.getElementById("sfxCommand");
        if (((userState.mod && userOptions['managePermissions' + [i] + ''] === 'mods') || (userState.sub && userOptions['managePermissions' + [i] + ''] === 'subs') || (userState.vip && userOptions['managePermissions' + [i] + ''] === 'vip') || userState.broadcaster || userOptions['otherUsers' + [i] + ''].indexOf(user) !== -1)) {
            let volume = userOptions['audioVolume' + [i] + '']/100;
            console.log("SFX volume set to: " + volume);
            var compiletrackpath = "audio"+ [i];
            console.log("SFX set from: " + compiletrackpath);
            var newTrack = userOptions['' + compiletrackpath + ''];
            console.log("SFX set to: "+ newTrack);
            sfxjava.volume = volume;
            var $loading = $('source').attr("src", newTrack);
            $loading;
            sfxjava.load();
            sfxjava.onended = function() {
                setTimeout(dfd.resolve, 2000, $loading);  
            };
            return dfd.promise();
        }
      }
    }
  }

  queue.add(queuesong)
    .then(function ($loading) {
        console.log("Next SFX Please");
    }, function (err) {
        console.log(err);
    });

});