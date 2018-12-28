(function() {
    if ($('#webtrekklet').length == 0) {
        initWebtrekklet();
    } else {
        window.showHideWebtrekklet();
    }
})();

function initWebtrekklet() {
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
            var $t = $('<p style="text-align: center;">Die nachfolgenden Parameter können verwendet, um Reports in Webtrekk zu filtern (Gross-/Kleinschreibung beachten, der Platzhalter * kann in Report-Filter verwendet werden):</p><table align="center"><tr><td style="font-weight: bold">Content Category Level 1 (CG6)</td><td>' + json.webtrekk.content_category_1 + '</td></tr><tr><td style="font-weight: bold">Content Category Level 2 (CG7)</td><td>' + json.webtrekk.content_category_2 + '</td></tr><tr><td style="font-weight: bold">Content Category Level 3 (CG8)</td><td>' + json.webtrekk.content_category_3 + '</td></tr><tr><td style="font-weight: bold">Content Category Level 4 (CG9)</td><td>' + json.webtrekk.content_category_4 + '</td></tr><tr><td style="font-weight: bold">Article/Page ID (CG10)</td><td>' + json.webtrekk.content_id + '</td></tr><tr><td style="font-weight: bold">Content Title (CP52)</td><td>' + json.webtrekk.content_title + '</td></tr><tr><td style="font-weight: bold">Publication Date (CP32)</td><td>' + json.webtrekk.content_publication_date + '</td></tr></table><p style="text-align: right"><a href="#" onclick="javascript:window.showHideWebtrekklet();return false;">Ausblenden</a></p>');
            $('body').prepend($e);
            $('#webtrekklet').append($t);
            $e.css({
              backgroundColor: 'white',
              position: 'fixed',
              top: '0px',
              paddingLeft: '10px',
              paddingRight: '10px',
              width: '100%',
              display: 'block',
              zIndex: '10000'
            })
        };
        $('head').prepend('<meta property="og:url" content="https:/ / www.srf.ch / " />');
        fetchMetaData();
    } else {
        alert('Webtrekk Metadaten auf dieser Seite nicht verfügbar')
    }
    
    window.showHideWebtrekklet = function() {
        if ($('#webtrekklet').length > 0) {
            $('#webtrekklet').toggle();
        }
    };
}

