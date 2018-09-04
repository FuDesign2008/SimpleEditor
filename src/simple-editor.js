function SimpleEditor(container) {
  let $ = window.jQuery || window.$
  this.container = container
  this.editarea = $('.se-edit', container).get(0)
  $(this.editarea).attr('contenteditable', true)
  $('.se-panel a', container).click(function() {
    var role = $(this).data('role')
    switch (role) {
      case 'h1':
      case 'h2':
      case 'p':
        document.execCommand('formatBlock', false, '<' + role + '>')
        break
      default:
        document.execCommand(role, false, null)
        break
    }
  })
}

SimpleEditor.prototype.setContent = function(html) {
  this.editarea.innerHTML = html
}
SimpleEditor.prototype.getContent = function() {
  return this.editarea.innerHTML
}
