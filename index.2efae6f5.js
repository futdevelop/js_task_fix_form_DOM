Array.from(document.querySelectorAll(".field-text")).forEach(function(e){var t=document.createElement("label"),r=e.getAttribute("id"),l=e.getAttribute("name"),a=l.charAt(0).toUpperCase()+l.slice(1);t.setAttribute("for",r),t.textContent=l,t.classList.add("field-label"),e.setAttribute("placeholder",a),e.parentElement.insertBefore(t,e)});
//# sourceMappingURL=index.2efae6f5.js.map
