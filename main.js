function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadyttstatechange=function(){
    if(xhr.readstate===4 && xhr.status == "200")
    {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
getfile("data.json",function(text){
  let dat=JSON.parse(text);
  console.log(data);
  details(data.basics);
  carrier(data.career);
  education(data.education);
});
var parent=document.query selector(".flex-parent");
var child1document.createElement("div");
child1.classList.add("profile");
parent.appendchild("child1");

var child1document.createElement("div");
child2.classList.add("content");
parent.appendchild("child2");
function details(basic){
  var img=document.createElement("img");
  img.src=basc.photo;
  child1.appendchild9img);
  var name=document.createElement("h3");
  name.textcontent=basic.name;
  child1.appendchild(name);
  var email=document.createElement("a");
  email.href="mailto:vemavenkatesh1994@gmail.com";
  email.textcontent=basic.email;
  child1.appendchild(email);
  var phone=document.createElement("h3");
  phone.textcontent=basic.mobile;
  child1.appendchild(phone);
  var addr =document.createElement("h1");
  addr.textcontent=basic.address;
  child1.appendchild(address);
  var hr =document.createElement("hr");
  child1.appendchild(hr);
  var address =document.createElement("p");
  var address =document.createElement("adress");
  child1.appendchild(address);
  }
  function carrier(obj){
  var heading= document.createElement("h2");
  heading.textContent = obj.info;
  child2.appendChild(heading);
  heading.textContent = "Carrier Objective:";
  var hline=document.createElement("hr");
  child2.appendChild(hline);
  var p=document.createElement("p");
  p.textContent=obj.info;
  child2.appendChild(p);
}
function education(edu){
  var heading=document.createElement("h2");
  child2.appendChild(heading);
  heading.textContent="education qualifications";
  var hline=document.createElement("hr");
  child2.appendChild(hline);
  var list=document.createElement("ul");
  child2.appendChild(list);
  for(var i=0;i<edu.length;i++){
    var litem=document.createElement("li");
    list.appendChild(litem);
    litem.textContent=edu[i].course;
    var college=document.createElement("p");
    list.appendChild(college);
    college.textContent=edu[i].college;
    var data=document.createElement("p");
    list.appendChild(data);
    data.textContent=edu[i].data;

  }
}
