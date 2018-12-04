var webtrekkletVisible = false;

(function() {
  alert("Test");
  if ($('#webtrekklet').length == 0) {
    createWebtrekklet();
  } else {
    if (webtrekkletVisible) {
      showWebtrekklet();
    } else {
      hideWebtrekklet();
    }
  }
}
)();

function createWebtrekklet() {
    tracking = null;
    weburl = null;
    if (typeof fetchMetaData === typeof(Function)) {
        nativebridge = Object;
        nativebridge.onMetadataRetrieved = function(metadata) {
            var json = JSON.parse(metadata);
            if (json.webtrekk.content_category_2 == null) {
                json.webtrekk.content_category_2 = ''
            };
            if (json.webtrekk.content_category_3 == null) {
                json.webtrekk.content_category_3 = ''
            };
            if (json.webtrekk.content_category_4 == null) {
                json.webtrekk.content_category_4 = ''
            };
            var $e = $('<div id="webtrekklet"></div>');
            var $t = $('<p>Die nachfolgenden Parameter können verwendet, um Reports in Webtrekk zu filtern (Gross-/Kleinschreibung beachten, der Platzhalter * kann in Report-Filter verwendet werden):</p><table align="center"><tr><td style="font-weight: bold">Content Category Level 1 (CG6)</td><td>' + json.webtrekk.content_category_1 + '</td></tr><tr><td style="font-weight: bold">Content Category Level 2 (CG7)</td><td>' + json.webtrekk.content_category_2 + '</td></tr><tr><td style="font-weight: bold">Content Category Level 3 (CG8)</td><td>' + json.webtrekk.content_category_3 + '</td></tr><tr><td style="font-weight: bold">Content Category Level 4 (CG9)</td><td>' + json.webtrekk.content_category_4 + '</td></tr><tr><td style="font-weight: bold">Article/Page ID (CG10)</td><td>' + json.webtrekk.content_id + '</td></tr><tr><td style="font-weight: bold">Content Title (CP52)</td><td>' + json.webtrekk.content_title + '</td></tr><tr><td style="font-weight: bold">Publication Date (CP32)</td><td>' + json.webtrekk.content_publication_date + '</td></tr><tr><td style="font-weight: bold"></td><td style="text-align: right"><a style="color: red" href="javascript: (function() { $(\'#webtrekk_bookmarklet\').remove(); }());">Metadaten ausblenden</a></td></tr></table>');
            $('body').prepend($e);
            $('#webtrekklet').append($t);
            $t.css({
                textAlign: 'left',
                position: 'block',
                top: '0px',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '768px',
                maxWidth: '768px',
                backgroundColor: 'white',
                marginTop: '10px',
                marginBottom: '10px'
            })
        };
        $('head').append('<meta property="og:url" content="https:/ / www.srf.ch / " />');
        fetchMetaData();
        $('html,body').scrollTop(0)
        showWebtrekklet();
    } else {
        alert('Webtrekk Metadaten auf dieser Seite nicht verfügbar')
    }
}
  
function showWebtrekklet() {
  webtrekkletDiv = $('#webtrekklet');
  webtrekkletDiv.style.display='block';
  webtrekkletDiv.style.visibility='visible';
  webtrekkletVisible = true;  
}

function hideWebtrekklet() {
  webtrekkletDiv = $('#webtrekklet');
  webtrekkletDiv.style.display='none';
  webtrekkletDiv.style.visibility='hidden';
  webtrekkletVisible = false;
}
