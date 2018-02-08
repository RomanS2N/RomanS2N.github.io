if (typeof sttep == 'number' && sttep>0)
{
	var reloadTimer = null;

	reload_timer_on = true; window.onload = function()
	{
	    setReloadTime(sttep);
	}

	function setReloadTime(secs)
	{
	    if (arguments.length == 1) {
	        if (reloadTimer) clearTimeout(reloadTimer);
	        reloadTimer = setTimeout("setReloadTime()", Math.ceil(parseFloat(secs) * 1000));
	    }
	    else {
			if (reload_timer_on)
				location.reload();
	    }
	}



}