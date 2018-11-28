define([],function(){
  return {
    init:function($mod){
    	var checkSelected=function(){
    		$('a',$mod).each(function(){
	    		//console.log(this.href);
	    		if(this.href==location.href){
	    			//$(this).addClass('selected')	
	    			this.className='selected'
	    		}else{
	    			//$(this).removeClass('selected')
	    			this.className=''
	    		}
	    	});

    	}
    	checkSelected();
    	$(window).on('hashchange pushstate',checkSelected)
    }
  }
})
