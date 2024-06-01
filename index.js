window .addEventListener('scroll',function(){
 const header = this.document.querySelector('header')
 header.classList.toggle('fixed', window.scrollY > 0)
}
)