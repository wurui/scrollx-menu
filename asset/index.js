define([],function(){
  return {
    init:function($mod){
    	var checkSelected=function(){
    		$('a',$mod).each(function(){
	    		//console.log(this.href);
	    		if(this.href==location.href){
	    			//$(this).addClass('selected')	
	    			this.parentNode.className='skin-color'
	    		}else{
	    			//$(this).removeClass('selected')
	    			this.parentNode.className=''
	    		}
	    	});

    	}
    	checkSelected();
    	$(window).on('hashchange pushstate',checkSelected)
    }
  }
})
