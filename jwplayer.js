 jwplayer("OnlinePlayer").setup({
                         primary: "flash",
                         flashplayer: "<%= Request.WebPath()+"/Tools/JWPlayer7player.flash.swf" %>",
                         skin: {
                             name: "glow",
                             url: "<%= Request.WebPath()+"/Tools/JWPlayer7/skins/glow.css" %>"
                        },
                         file: url,
                         autostart: true,
                         screencolor: '000000',
                         wmode: 'transparent',
                         height: h,
                         width: w,
                     });
