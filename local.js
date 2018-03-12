{
    const btnSetLocal =document.getElementById('btnSetLocal')
    const btnRemoveLocal =document.getElementById('btnRemoveLocal')
    function handleSetLocal()
    {
        const inptName = document.getElementById('name');
    xonsole.log(inputName.value);

localStorage.setItem('IDM222LocalName', inputName.value);
}
 function handeReniveLocal() {
     localStorage.removeItem('IDM222LocalName');
 }

btnLocal.addEventListener('click', hanleSet,false);
btnLocal.removeEventListener
}