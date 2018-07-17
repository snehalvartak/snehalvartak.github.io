function downloadURI() 
{
    var link = document.createElement("a");
    link.download = "Madrina_resume";
    link.href = "files/madrina_resume.pdf";
    link.click();
}