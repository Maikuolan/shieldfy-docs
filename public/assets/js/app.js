$(document).ready(function(){$("#doc-menu").affix({offset:{top:$("#header").outerHeight(!0)+$("#doc-header").outerHeight(!0)+45,bottom:$("#footer").outerHeight(!0)+$("#promo-block").outerHeight(!0)+75}}),$(window).on("load resize",function(){$(window).trigger("scroll")}),$("body").scrollspy({target:"#doc-nav",offset:100}),$("a.scrollto").on("click",function(o){var e=this.hash;o.preventDefault(),$("body").scrollTo(e,800,{offset:0,axis:"y"})}),$("#cards-wrapper .item-inner").matchHeight(),$("#showcase .card").matchHeight(),$(document).delegate('*[data-toggle="lightbox"]',"click",function(o){o.preventDefault(),$(this).ekkoLightbox()})});