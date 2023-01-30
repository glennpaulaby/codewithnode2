const copyFiles = () => {
    console.log("copying files..");
    let sucess = true;
    setTimeout(() => {
     
    if(sucess){
        console.log("file copied sucessfully");
    }    else{
        console.log("error, could not copy files");
        }
    }, 2000);
};