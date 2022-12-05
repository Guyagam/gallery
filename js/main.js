'use strict'


function onInit() {
  renderProjs()
}


function renderProjs() {
  const projs = getProj()
  const strHTMLs = projs.map(proj =>
    `<div onclick="renderModal('${proj.id}')" class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="pic/${proj.id}.jpeg" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${proj.title}</h4>
      <p class="text-muted">${proj.desc}</p>
    </div>
  </div>`
  )
  document.querySelector('.rowTorender').innerHTML = strHTMLs.join('')
}


function renderModal(id) {
  const projs = getProj()
  const proj = projs.find(proj => proj.id === id)

  const strHTML = `<h2>${proj.name}</h2>
  <a href="${proj.url}">Link to the project!</a>
  <img class="img-fluid d-block mx-auto" src="pic/${proj.id}.jpeg" alt="">
    <p>${proj.desc}</p>
    <ul class="list-inline">
    <li><strong>Date: </strong> ${getDate(proj.publishedAt)}</li>
    <li><strong>Technologies: </strong> ${proj.labels.join(',')}</li>
  </ul>
      <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      
      Close Project</button>`

  document.querySelector('.modal-body').innerHTML = strHTML
  console.log(strHTML)


}



function onSend(ev) {
  ev.preventDefault()
  const SUBJECT = document.querySelector('.subject-txt').value
  const TEXTAREA = document.querySelector('.text-area').value
  sendMessage(SUBJECT, TEXTAREA)
}