// =========================================================
// Free Tuition Media — shared script
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav toggle */
  var burger = document.getElementById('burgerBtn');
  var panel = document.getElementById('mobilePanel');
  if (burger && panel) {
    burger.addEventListener('click', function () {
      panel.classList.toggle('open');
    });
    panel.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { panel.classList.remove('open'); });
    });
  }

  /* FAQ accordion */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) { item.classList.add('open'); }
    });
  });

  /* Role toggle (Register page: Student/Guardian vs Tutor) */
  document.querySelectorAll('.role-option').forEach(function (opt) {
    opt.addEventListener('click', function () {
      var group = opt.closest('.role-toggle');
      group.querySelectorAll('.role-option').forEach(function (o) { o.classList.remove('selected'); });
      opt.classList.add('selected');
      var input = opt.querySelector('input');
      if (input) { input.checked = true; }
    });
  });

  /* Hero / sidebar filter form -> redirect to find-tuition.html or find-tutor.html with query params */
  var tuitionFilterForm = document.getElementById('tuitionFilterForm');
  if (tuitionFilterForm) {
    tuitionFilterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var params = new URLSearchParams(new FormData(tuitionFilterForm)).toString();
      window.location.href = 'find-tuition.html' + (params ? '?' + params : '');
    });
  }

  var tutorFilterForm = document.getElementById('tutorFilterForm');
  if (tutorFilterForm) {
    tutorFilterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var params = new URLSearchParams(new FormData(tutorFilterForm)).toString();
      window.location.href = 'find-tutor.html' + (params ? '?' + params : '');
    });
  }

  /* Generic "demo" form submit handler: shows a success alert instead of hitting a real server */
  document.querySelectorAll('form[data-demo-submit]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var alertBox = form.querySelector('.alert');
      if (alertBox) {
        alertBox.classList.add('show');
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
      document.querySelectorAll('.role-option').forEach(function (o) { o.classList.remove('selected'); });
    });
  });

});
