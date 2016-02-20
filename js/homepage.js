function addToolbar(){

  var bodyz = document.getElementsByTagName('body')[0];

  var placeHolder = document.getElementById("placeHolder");

  var toolbar = document.createElement('div');
  toolbar.setAttribute('id','toolbar');
  toolbar.innerHTML = 'Toolbar';  
  bodyz.insertBefore(toolbar, placeHolder);

  bodyz.style.marginLeft = "60px";
}
