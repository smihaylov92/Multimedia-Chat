(function(){
	'use strict';
	var initialState = {
		chatUser: '',
		currentUser: ''
	};

	var actionTypes = {
		setChatUserName: 'CHAT_USER_UPDATE',
		setCurrentUserName: 'CURRENT_USER_UPDATE'
	};

	var actions = {
		setChatUserName: function(data){
			console.log(data);
			return {
				type: actionTypes.setChatUserName,
				data: data
			}
		},
		setCurrentUserName: function(data){
			console.log(data);
			return {
				type: actionTypes.setCurrentUserName,
				data: data
			}
		}
	}

	var store  = Redux.createStore(
		function(state, action){
			if(!state){
				return initialState;
			}

			switch(action.type){
				case actionTypes.setChatUserName:
					return Object.assign(
						{},
						state,
						{chatUser: action.data}
					)

				case actionTypes.setCurrentUserName:
					return Object.assign(
						{},
						state,
						{currentUser: action.data}
					)
			}
		}
	);
	var ReduxBehaviour = PolymerRedux(store);

	


	Polymer({
        is: 'chat-state-store',

        hostAttributes: {
            hidden: true
        },

        properties: {
            /**
             * Properties for the store to expose outwards
             * @type {Object}
             */
            chatUser: {
                readOnly: true,
                notify: true,
                statePath: 'chatUser'
            },

            currentUser: {
                readOnly: true,
                notify: true,
                statePath: 'currentUser'
            }
        },

        behaviors: [
            ReduxBehaviour
        ],

        /**
         * SetVolume in the store
         * @param {Number} data
         */
        setChatUserName: function (data) {
            this.dispatch(actions.setChatUserName(data));
            // this.fire('state-changed', store.getState());
        },

        setCurrentUserName: function(data) {
        	console.log('setCurrentUserName');
        	console.log(data);
        	this.dispatch(actions.setCurrentUserName(data));
        }

    });
})();

