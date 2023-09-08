var customizeToolbar = function() {
    $('#wpTextbox1').wikiEditor('addToToolbar', {
	section: 'advanced',
	group: 'format',
	tools: {
	    "quotes": {
		label: 'Кавычки',
		type: 'button',
		icon: '//upload.wikimedia.org/wikipedia/commons/a/ac/Norwegian_quote_sign.png',
		action: {
		    type: 'encapsulate',
		    options: {
			pre: "«",
			post: "»"
		    }
		}
	    }
	}
    });
    $('#wpTextbox1').wikiEditor('addToToolbar', {
	section: 'advanced',
	group: 'format',
	tools: {
	    "math": {
		label: 'Math',
		type: 'button',
		icon: '//upload.wikimedia.org/wikipedia/commons/3/38/Button_Math.png',
		action: {
		    type: 'encapsulate',
		    options: {
			pre: "<math>",
			post: "</math>"
		    }
		}
	    }
	}
    });
    $('#wpTextbox1').wikiEditor('addToToolbar', {
	section: 'advanced',
	group: 'format',
	tools: {
	    "code": {
		label: 'Code',
		type: 'button',
		icon: '//upload.wikimedia.org/wikipedia/commons/6/62/Toolbar_code.png',
		action: {
		    type: 'encapsulate',
		    options: {
			pre: "<code>",
			post: "</code>"
		    }
		}
	    }
	}
    });
    $('#wpTextbox1').wikiEditor('addToToolbar', {
	section: 'advanced',
	group: 'format',
	tools: {
	    "pre": {
		label: 'Pre',
		type: 'button',
		icon: '//upload.wikimedia.org/wikipedia/commons/b/b9/Toolbar_pre_vector.png',
		action: {
		    type: 'encapsulate',
		    options: {
			pre: "<pre>",
			post: "</pre>"
		    }
		}
	    }
	}
    });
    $('#wpTextbox1').wikiEditor('addToToolbar', {
	section: 'advanced',
	group: 'format',
	tools: {
	    "template": {
		label: 'Шаблон',
		type: 'button',
		icon: '//upload.wikimedia.org/wikipedia/commons/d/dd/Vector_toolbar_template_button.png',
		action: {
		    type: 'encapsulate',
		    options: {
			pre: "{{",
			post: "}}"
		    }
		}
	    }
	}
    });
    $('#wpTextbox1').wikiEditor('addToToolbar', {
	section: 'advanced',
	group: 'insert',
	tools: {
	    "refs": {
		label: 'Примечания',
		type: 'button',
		icon: '//upload.wikimedia.org/wikipedia/commons/c/cf/Toolbar_insert_reference.png',
		action: {
		    type: 'encapsulate',
		    options: {
			pre: "<references />"
		    }
		}
	    }
	}
    });
};
 
/* Check if view is in edit mode and that the required modules are available. Then, customize the toolbar . . . */
if ( $.inArray( mw.config.get( 'wgAction' ), ['edit', 'submit'] ) !== -1 ) {
    mw.loader.using( 'user.options', function () {
        if ( mw.user.options.get('usebetatoolbar') ) {
            mw.loader.using( 'ext.wikiEditor.toolbar', function () {
                $(document).ready( customizeToolbar );
            });
        }
    });
}

/* Добавление дополнительных кнопок в WikiEditor на страницах LiquidThreads' */
mw.hook( 'ext.lqt.textareaCreated' ).add( customizeToolbar );