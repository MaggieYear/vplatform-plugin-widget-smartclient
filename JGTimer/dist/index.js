!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";isc.ClassFactory.defineClass("JGTimer","JGBaseWidget"),isc.ClassFactory.mixInInterface("JGTimer","IWindowAop"),isc.JGTimer.addProperties({Startup:!0,_isStart:void 0,RunTimes:0,Interval:10,listener:["TimerEvent"],_myInterval:null}),isc.JGTimer.addMethods({startTimer:function(){if(!this._isStart){this._isStart=!0;var t=this;t.Interval>0&&(this._currentCount=1,this._myInterval=setInterval((function(){t._callEvent(t,"TimerEvent"),0!=t.RunTimes&&t._currentCount==t.RunTimes&&t.stopTimer(),t._currentCount++}),1e3*this.Interval))}},stopTimer:function(){this._isStart=!1,clearInterval(this._myInterval)},getStartup:function(){return this._isStart?this._isStart:this.Startup},setStartup:function(t){t?this.startTimer():this.stopTimer()},destroy:function(){this.stopTimer(),this.Super("destroy",arguments)},draw:function(){},disabled:function(){this.stopTimer()},enabled:function(){this.start()},start:function(){this.startTimer()},dataLoaded:function(){this.Startup&&this.startTimer()}})}));
