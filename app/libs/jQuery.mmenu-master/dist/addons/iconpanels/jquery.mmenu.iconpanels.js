!function(e){var i,n="iconPanels";e.mmenu.addons[n]={setup:function(){var a=this,t=this.opts[n],l=(this.conf[n],!1);e.mmenu.glbl,"boolean"==typeof t&&(t={add:t}),"number"!=typeof t&&"string"!=typeof t||(t={add:!0,visible:t}),"object"!=typeof t&&(t={}),"first"==t.visible&&(l=!0,t.visible=1),(t=this.opts[n]=e.extend(!0,{},e.mmenu.defaults[n],t)).visible=Math.min(3,Math.max(1,t.visible)),t.visible++;var s="";if(!l){for(var d=0;d<=t.visible;d++)s+=" "+i.panel+"_iconpanel-"+d;s.length&&(s=s.slice(1))}if(t.add){var r=function(n){if(!n.parent("."+i.listitem+"_vertical").length){var d=a.$pnls.children("."+i.panel);l?d.removeClass(i.panel+"_iconpanel-first").first().addClass(i.panel+"_iconpanel-first"):d.removeClass(s).filter("."+i.panel+"_opened-parent").removeClass(i.hidden).not(function(){return e(this).parent("."+i.listitem+"_vertical").length}).add(n).slice(-t.visible).each(function(n){e(this).addClass(i.panel+"_iconpanel-"+n)})}};this.bind("initMenu:after",function(){var e=[i.menu+"_iconpanel"];t.size&&e.push(i.menu+"_iconpanel-"+t.size),t.hideNavbar&&e.push(i.menu+"_hidenavbar"),t.hideDivider&&e.push(i.menu+"_hidedivider"),this.$menu.addClass(e.join(" "))}),this.bind("openPanel:start",r),this.bind("initPanels:after",function(e){r.call(a,a.$pnls.children("."+i.panel+"_opened"))}),this.bind("initListview:after",function(e){!t.blockPanel||e.parent("."+i.listitem+"_vertical").length||e.children("."+i.panel+"__blocker").length||e.prepend('<a href="#'+e.closest("."+i.panel).attr("id")+'" class="'+i.panel+'__blocker" />')})}},add:function(){i=e.mmenu._c,e.mmenu._d,e.mmenu._e},clickAnchor:function(e,i){}},e.mmenu.defaults[n]={add:!1,blockPanel:!0,hideDivider:!1,hideNavbar:!0,visible:3}}(jQuery);