/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *  
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */
 
 define(["../../../org.scn.community.shared/modules/component.core", "./NotifySpec"], function() {

var myComponentData = org_scn_community_require.knownComponents.basics.Notify;

Notify = function () {

	var that = this;
	
	that.init = function() {
		// define root component

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	};
	
	that.initAsync = function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
	
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		// this.addStyleClass("scn-pack-?");
			
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
	};

	that.afterUpdate = function() {
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/

		// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);

		org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
	};
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/

	that.processData = function (flatData, afterPrepare, owner) {
		var that = owner;
		
		if( that.getShownote() == "Y"){
			that.genarate(that);
			that.setShownote("N");
			that.setMsgtext("");
			that.firePropertiesChanged( [ "msgtext","shownote"]);
		}
		
		// processing on data
		that.afterPrepare(that);
	};

	that.afterPrepare = function (owner) {
		var that = owner;
			
		// visualization on processed data
		
	};

	that.onResize = function (width, height, parent) {
		// in case special resize code is required
	};
	
	that.genarate = function(owner) {
		var that = owner;
		
        var n = noty({
            text        : that.getMsgtext(),
            type        : that.getMsgtype(),
            dismissQueue: true,
            modal		: that.getModal(),
            layout      : that.getLayout(),
            theme       : 'defaultTheme'
        });

        setTimeout(function () {
            $.noty.close(n.options.id);
        }, that.getDelay()*1000);
    };

	/* COMPONENT SPECIFIC CODE - END METHODS*/
	return that;
};

// // define([], function(basicsnotify){
	myComponentData.instance = Notify;
	return myComponentData.instance;
// });

});