function downloadURI() 
{
    var link = document.createElement("a");
    link.download = "Snehal_resume";
    link.href = "files/Snehal_resume.pdf";
    link.click();
}
