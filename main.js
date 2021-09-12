var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdNZDxc9GlfyrHfc4XGWPo1mfxd-ZFsW_vg&usqp=CAU", "https://img.freepik.com/free-vector/cute-little-girl-cartoon_43633-2494.jpg?size=338&ext=jpg"]
var names = ["Family book","Ashish Ranjan", "Varsha Ranjan", "Anjika Ranjan", "Vamika Ranjan"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = images[i];
   
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
