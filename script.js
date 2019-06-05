// ==UserScript==
// @name         FastUrlDialogs
// @version      0.8
// @description  Добавляет диалоги в боковой список
// @author       Misterzym
// @match        https://vk.com/*
// @homepage https://github.com/misterzym/vkFastDialog
// @updateURL https://raw.githubusercontent.com/misterzym/vkFastDialog/master/script.js
// @downloadURL https://raw.githubusercontent.com/misterzym/vkFastDialog/master/script.js
// @icon data:image/png;base64,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
// @grant        none
// ==/UserScript==
var savedDialogs = {};
load();
if (savedDialogs == null)
    savedDialogs = {};
var dial = JSON.stringify({
    name: "",
    img: ""
});

(function() {
    if(!window.jQuery){
        var jq = document.createElement('script');
        jq.src = "//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
        document.getElementsByTagName('head')[0].appendChild(jq);
    }

    var timerId = setTimeout(function() {
        $("#side_bar_inner ol").append('<div class="more_div"></div>');
        rebuildListSaved();
    }, 1000);

    var timerId2 = setInterval(function() {
        if (!$("a").is(".addSaveDialogs") && $("button").is("._im_chat_members.im-page--members")){
            $("._im_dialog_action_wrapper ._ui_menu").append('<div class="ui_actions_menu_sep"></div><a tabindex="0" role="link" class="ui_actions_menu_item _im_action im-action im-action_media addSaveDialogs">Добавить в быстрые диалоги</a>');

            $(".addSaveDialogs").click(function(){
                var nums=$(".im-page--title-main ._im_page_peer_name").attr('href');
                savedDialogs[nums] = JSON.parse(dial);
                savedDialogs[nums].name=$(".im-page--title-main ._im_page_peer_name").html();
                savedDialogs[nums].img=$(".im-page--aside-photo img").attr("src");
                save();
                rebuildListSaved();
            });

        }
    });
})();

function rebuildListSaved(){
    $(".savedDialogsList").remove();
    var tt="";
    for (var prop in savedDialogs) {
        tt = tt + '<li class="l_comm savedDialogsList"><a href="'+prop+'" onclick="return nav.go(this, event, {noback: true, params: {_ref:\'left_nav\'}});" class="left_row"><span class="left_fixer"> <object type="internal/link"><a href="'+prop+'" onclick="nav.link &amp;&amp; nav.link(\''+prop+'\', event); cancelEvent(event);" class="left_count_wrap fl_r left_void left_count_wrap_hovered"><span class="inl_bl left_count_sign">0</span></a></object><span class="left_icon fl_l" style="background:url(\''+savedDialogs[prop].img+'\');width:20px;height:20px;padding:3px 4px;background-position:center;background-size:contain;margin-right:10px;"></span><span class="left_label inl_bl">'+savedDialogs[prop].name+'</span></span></a><div class="left_settings removedSaveDialog" prop="'+prop+'"><div class="left_settings_inner" style="background:url(/images/icons/im_actions.png?7) no-repeat -3px -64px;"></div></div></li>';
    }
    $("#side_bar_inner ol").append(tt);
    $(".removedSaveDialog").click(function(){
        $(this).unbind();
        delete savedDialogs[$(this).attr("prop")];
        rebuildListSaved();
        save();
    });
}

function save() {
    localStorage.setItem('savedDialogs', JSON.stringify(savedDialogs));
}

function load() {
    savedDialogs = JSON.parse(localStorage.getItem('savedDialogs'));
}

