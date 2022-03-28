let obj = {
    count : 0,
    startTimer : function(){
        console.log(this.count);
        // let callback = function(){ console.log(this.console++);}; // 0 NaN NaN ...
        let callback = () => {console.log(this.count++);}; // 0 0 1 2 3 4 5 ...
        setInterval(callback,1000);
    }
}
obj.startTimer();