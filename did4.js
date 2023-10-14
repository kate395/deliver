var _0x428193 = (function () {
    var _0x53195e = true
    return function (_0x1c55c2, _0x58afc4) {
      var _0x14e732 = _0x53195e
        ? function () {
            if (_0x58afc4) {
              var _0x255393 = _0x58afc4.apply(_0x1c55c2, arguments)
              return (_0x58afc4 = null), _0x255393
            }
          }
        : function () {}
      return (_0x53195e = false), _0x14e732
    }
  })(),
  _0x375d81 = _0x428193(this, function () {
    return _0x375d81
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x375d81)
      .search('(((.+)+)+)+$')
  })
_0x375d81()
var _0x4315e8 = (function () {
  var _0x242712 = true
  return function (_0x428822, _0x3fb47a) {
    var _0x151019 = _0x242712
      ? function () {
          if (_0x3fb47a) {
            var _0x3793fc = _0x3fb47a.apply(_0x428822, arguments)
            return (_0x3fb47a = null), _0x3793fc
          }
        }
      : function () {}
    return (_0x242712 = false), _0x151019
  }
})()
var _0x371998 = _0x4315e8(this, function () {
  var _0x2afe3c = function () {
    var _0x4efa09
    try {
      _0x4efa09 = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x4f9083) {
      _0x4efa09 = window
    }
    return _0x4efa09
  }
  var _0x65cff0 = _0x2afe3c()
  var _0x2a7bcc = (_0x65cff0.console = _0x65cff0.console || {}),
    _0x383e60 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
  for (var _0x13458b = 0; _0x13458b < _0x383e60.length; _0x13458b++) {
    var _0x55f2ff = _0x4315e8.constructor.prototype.bind(_0x4315e8)
    var _0x4c4758 = _0x383e60[_0x13458b]
    var _0x42b769 = _0x2a7bcc[_0x4c4758] || _0x55f2ff
    _0x55f2ff['__proto__'] = _0x4315e8.bind(_0x4315e8)
    _0x55f2ff.toString = _0x42b769.toString.bind(_0x42b769)
    _0x2a7bcc[_0x4c4758] = _0x55f2ff
  }
})
_0x371998()
var href = document.location.href,
  lastPathSegment = href.substr(href.lastIndexOf('/') + 1)
if (
  lastPathSegment.indexOf('index.php') != -1 ||
  lastPathSegment.indexOf('validate_domain.php') != -1 ||
  lastPathSegment == ''
) {
  $.ajax(_0x2289ce)
  $.ajax(_0x416a6e)
  $.ajax(_0x19afac)
} else {
  if (lastPathSegment.indexOf('dashboard.php') != -1) {
    var _0x13cd5f = {
      url: 'assets/js/bootstrap/bootstrap.bundle.min.js',
      async: true,
      dataType: 'script',
    }
    $.ajax(_0x13cd5f)
    var _0x5bd0c9 = {
      url: 'assets/js/script.js',
      async: true,
      dataType: 'script',
    }
    $.ajax(_0x5bd0c9)
    var _0x1cb9bd = {
      url: 'assets/js/icons/feather-icon/feather.min.js',
      async: false,
      dataType: 'script',
    }
    $.ajax(_0x1cb9bd)
    var _0x13ff17 = {
      url: 'assets/js/icons/feather-icon/feather-icon.js',
      async: true,
      dataType: 'script',
    }
    $.ajax(_0x13ff17)
    var _0x3feaaa = {
      url: 'assets/js/scrollbar/simplebar.js',
      async: false,
      dataType: 'script',
    }
    $.ajax(_0x3feaaa)
    var _0x84a823 = {
      url: 'assets/js/scrollbar/custom.js',
      async: true,
      dataType: 'script',
    }
    $.ajax(_0x84a823)
    var _0x47c54e = {
      url: 'assets/js/sidebar-menu.js',
      async: false,
      dataType: 'script',
    }
    $.ajax(_0x47c54e)
  } else {
    if (
      lastPathSegment.indexOf('add_category.php') != -1 ||
      lastPathSegment.indexOf('add_coupon.php') != -1 ||
      lastPathSegment.indexOf('oprofile.php') != -1 ||
      lastPathSegment.indexOf('add_payout.php') != -1 ||
      lastPathSegment.indexOf('add_faq.php') != -1 ||
      lastPathSegment.indexOf('add_sponsore.php') != -1 ||
      lastPathSegment.indexOf('add_facility.php') != -1 ||
      lastPathSegment.indexOf('add_restriction.php') != -1 ||
      lastPathSegment.indexOf('profile.php') != -1 ||
      lastPathSegment.indexOf('setting.php') != -1
    ) {
      var _0x3416ea = {
        url: 'assets/js/bootstrap/bootstrap.bundle.min.js',
        async: true,
        dataType: 'script',
      }
      $.ajax(_0x3416ea)
      var _0x4ecb87 = {
        url: 'assets/js/script.js',
        async: true,
        dataType: 'script',
      }
      $.ajax(_0x4ecb87)
      var _0x2d89c7 = {
        url: 'assets/js/icons/feather-icon/feather.min.js',
        async: false,
        dataType: 'script',
      }
      $.ajax(_0x2d89c7)
      var _0x40e2bb = {
        url: 'assets/js/icons/feather-icon/feather-icon.js',
        async: true,
        dataType: 'script',
      }
      $.ajax(_0x40e2bb)
      var _0x224709 = {
        url: 'assets/js/scrollbar/simplebar.js',
        async: false,
        dataType: 'script',
      }
      $.ajax(_0x224709)
      var _0x363369 = {
        url: 'assets/js/scrollbar/custom.js',
        async: true,
        dataType: 'script',
      }
      $.ajax(_0x363369)
      var _0x22d29d = {
        url: 'assets/js/sidebar-menu.js',
        async: false,
        dataType: 'script',
      }
      $.ajax(_0x22d29d)
      var _0x3cb10d = {
        url: 'assets/js/notify/bootstrap-notify.min.js',
        async: true,
        dataType: 'script',
      }
      $.ajax(_0x3cb10d)
    } else {
      if (
        lastPathSegment.indexOf('add_etype.php') != -1 ||
        lastPathSegment.indexOf('add_cover.php') != -1 ||
        lastPathSegment.indexOf('add_gallery.php') != -1 ||
        lastPathSegment.indexOf('add_artist.php') != -1
      ) {
        var _0x4513bd = {
          url: 'assets/js/bootstrap/bootstrap.bundle.min.js',
          async: true,
          dataType: 'script',
        }
        $.ajax(_0x4513bd)
        var _0x3dee4d = {
          url: 'assets/js/script.js',
          async: true,
          dataType: 'script',
        }
        $.ajax(_0x3dee4d)
        var _0x1ffc58 = {
          url: 'assets/js/icons/feather-icon/feather.min.js',
          async: false,
          dataType: 'script',
        }
        $.ajax(_0x1ffc58)
        var _0x5cc826 = {
          url: 'assets/js/icons/feather-icon/feather-icon.js',
          async: true,
          dataType: 'script',
        }
        $.ajax(_0x5cc826)
        var _0x3936f4 = {
          url: 'assets/js/scrollbar/simplebar.js',
          async: false,
          dataType: 'script',
        }
        $.ajax(_0x3936f4)
        var _0x262afa = {
          url: 'assets/js/scrollbar/custom.js',
          async: true,
          dataType: 'script',
        }
        $.ajax(_0x262afa)
        var _0x57e478 = {
          url: 'assets/js/sidebar-menu.js',
          async: false,
          dataType: 'script',
        }
        $.ajax(_0x57e478)
        var _0x409b73 = {
          url: 'assets/js/notify/bootstrap-notify.min.js',
          async: true,
          dataType: 'script',
        }
        $.ajax(_0x409b73)
        var _0x18d350 = {
          url: 'assets/js/select2/select2.full.min.js',
          async: false,
          dataType: 'script',
        }
        $.ajax(_0x18d350)
        $('.select2-single').select2()
      } else {
        if (lastPathSegment.indexOf('add_event.php') != -1) {
          var _0xa42130 = {
            url: 'assets/js/bootstrap/bootstrap.bundle.min.js',
            async: true,
            dataType: 'script',
          }
          $.ajax(_0xa42130)
          var _0x5c7e74 = {
            url: 'assets/js/script.js',
            async: true,
            dataType: 'script',
          }
          $.ajax(_0x5c7e74)
          var _0x316d0c = {
            url: 'assets/js/icons/feather-icon/feather.min.js',
            async: false,
            dataType: 'script',
          }
          $.ajax(_0x316d0c)
          var _0x146671 = {
            url: 'assets/js/icons/feather-icon/feather-icon.js',
            async: true,
            dataType: 'script',
          }
          $.ajax(_0x146671)
          var _0x37aea0 = {
            url: 'assets/js/scrollbar/simplebar.js',
            async: false,
            dataType: 'script',
          }
          $.ajax(_0x37aea0)
          var _0x288bc8 = {
            url: 'assets/js/scrollbar/custom.js',
            async: true,
            dataType: 'script',
          }
          $.ajax(_0x288bc8)
          var _0x2609ee = {
            url: 'assets/js/sidebar-menu.js',
            async: false,
            dataType: 'script',
          }
          $.ajax(_0x2609ee)
          var _0x1d7660 = {
            url: 'assets/js/notify/bootstrap-notify.min.js',
            async: true,
            dataType: 'script',
          }
          $.ajax(_0x1d7660)
          var _0x43472e = {
            url: 'assets/js/select2/select2.full.min.js',
            async: false,
            dataType: 'script',
          }
          $.ajax(_0x43472e)
          $('.select2-single').select2()
          var _0x48920 = { placeholder: 'Choose' }
          $('.select2-multi-select').select2(_0x48920)
          var _0x7667d = {
            url: 'assets/summernote/summernote-bs4.min.js',
            async: false,
            dataType: 'script',
          }
          $.ajax(_0x7667d)
          $(document).ready(function () {
            $('#cdesc,#disclaimer,#cancle_policy').summernote({
              height: '300px',
              toolbar: [
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript']],
              ],
            })
          })
        } else {
          if (lastPathSegment.indexOf('add_page.php') != -1) {
            var _0x534ab2 = {
              url: 'assets/js/bootstrap/bootstrap.bundle.min.js',
              async: true,
              dataType: 'script',
            }
            $.ajax(_0x534ab2)
            var _0x2f7483 = {
              url: 'assets/js/script.js',
              async: true,
              dataType: 'script',
            }
            $.ajax(_0x2f7483)
            var _0x425f6c = {
              url: 'assets/js/icons/feather-icon/feather.min.js',
              async: false,
              dataType: 'script',
            }
            $.ajax(_0x425f6c)
            var _0x522c5c = {
              url: 'assets/js/icons/feather-icon/feather-icon.js',
              async: true,
              dataType: 'script',
            }
            $.ajax(_0x522c5c)
            var _0x324a98 = {
              url: 'assets/js/scrollbar/simplebar.js',
              async: false,
              dataType: 'script',
            }
            $.ajax(_0x324a98)
            var _0x59dadb = {
              url: 'assets/js/scrollbar/custom.js',
              async: true,
              dataType: 'script',
            }
            $.ajax(_0x59dadb)
            var _0x44f26c = {
              url: 'assets/js/sidebar-menu.js',
              async: false,
              dataType: 'script',
            }
            $.ajax(_0x44f26c)
            var _0x4ae036 = {
              url: 'assets/js/notify/bootstrap-notify.min.js',
              async: true,
              dataType: 'script',
            }
            $.ajax(_0x4ae036)
            var _0xa0850a = {
              url: 'assets/summernote/summernote-bs4.min.js',
              async: false,
              dataType: 'script',
            }
            $.ajax(_0xa0850a)
            $(document).ready(function () {
              $('#cdesc,#disclaimer,#cancle_policy').summernote({
                height: '300px',
                toolbar: [
                  ['style', ['bold', 'italic', 'underline', 'clear']],
                  ['font', ['strikethrough', 'superscript', 'subscript']],
                ],
              })
            })
          } else {
            if (lastPathSegment.indexOf('edit_payment.php') != -1) {
              var _0x3425ee = {
                url: 'assets/js/bootstrap/bootstrap.bundle.min.js',
                async: true,
                dataType: 'script',
              }
              $.ajax(_0x3425ee)
              var _0x1bcb00 = {
                url: 'assets/js/script.js',
                async: true,
                dataType: 'script',
              }
              $.ajax(_0x1bcb00)
              var _0x4acc27 = {
                url: 'assets/js/icons/feather-icon/feather.min.js',
                async: false,
                dataType: 'script',
              }
              $.ajax(_0x4acc27)
              var _0x484ee2 = {
                url: 'assets/js/icons/feather-icon/feather-icon.js',
                async: true,
                dataType: 'script',
              }
              $.ajax(_0x484ee2)
              var _0x49315d = {
                url: 'assets/js/scrollbar/simplebar.js',
                async: false,
                dataType: 'script',
              }
              $.ajax(_0x49315d)
              var _0x139028 = {
                url: 'assets/js/scrollbar/custom.js',
                async: true,
                dataType: 'script',
              }
              $.ajax(_0x139028)
              var _0x3f537b = {
                url: 'assets/js/sidebar-menu.js',
                async: false,
                dataType: 'script',
              }
              $.ajax(_0x3f537b)
              var _0x31bf5e = {
                url: 'assets/js/notify/bootstrap-notify.min.js',
                async: true,
                dataType: 'script',
              }
              $.ajax(_0x31bf5e)
              var _0x5bda79 = {
                url: 'assets/bootstrap-tagsinput/bootstrap-tagsinput.js',
                async: false,
                dataType: 'script',
              }
              $.ajax(_0x5bda79)
            } else {
              if (
                lastPathSegment.indexOf('list_category.php') != -1 ||
                lastPathSegment.indexOf('list_epayout.php') != -1 ||
                lastPathSegment.indexOf('list_artist.php') != -1 ||
                lastPathSegment.indexOf('list_etype.php') != -1 ||
                lastPathSegment.indexOf('list_cover.php') != -1 ||
                lastPathSegment.indexOf('list_gallery.php') != -1 ||
                lastPathSegment.indexOf('list_coupon.php') != -1 ||
                lastPathSegment.indexOf('list_event.php') != -1 ||
                lastPathSegment.indexOf('list_page.php') != -1 ||
                lastPathSegment.indexOf('list_faq.php') != -1 ||
                lastPathSegment.indexOf('payment_list.php') != -1 ||
                lastPathSegment.indexOf('list_sponsore.php') != -1 ||
                lastPathSegment.indexOf('list_payout.php') != -1 ||
                lastPathSegment.indexOf('list_facility.php') != -1 ||
                lastPathSegment.indexOf('list_restriction.php') != -1 ||
                lastPathSegment.indexOf('list_user.php') != -1
              ) {
                var _0x58d1a4 = {
                  url: 'assets/js/bootstrap/bootstrap.bundle.min.js',
                  async: true,
                  dataType: 'script',
                }
                $.ajax(_0x58d1a4)
                var _0x5b6f88 = {
                  url: 'assets/js/script.js',
                  async: true,
                  dataType: 'script',
                }
                $.ajax(_0x5b6f88)
                var _0x298b6f = {
                  url: 'assets/js/icons/feather-icon/feather.min.js',
                  async: false,
                  dataType: 'script',
                }
                $.ajax(_0x298b6f)
                var _0x177a94 = {
                  url: 'assets/js/icons/feather-icon/feather-icon.js',
                  async: true,
                  dataType: 'script',
                }
                $.ajax(_0x177a94)
                var _0x57142e = {
                  url: 'assets/js/scrollbar/simplebar.js',
                  async: false,
                  dataType: 'script',
                }
                $.ajax(_0x57142e)
                var _0x315d92 = {
                  url: 'assets/js/scrollbar/custom.js',
                  async: true,
                  dataType: 'script',
                }
                $.ajax(_0x315d92)
                var _0x4dfcf3 = {
                  url: 'assets/js/sidebar-menu.js',
                  async: false,
                  dataType: 'script',
                }
                $.ajax(_0x4dfcf3)
                var _0x2252c3 = {
                  url: 'assets/js/notify/bootstrap-notify.min.js',
                  async: true,
                  dataType: 'script',
                }
                $.ajax(_0x2252c3)
                var _0x4136b1 = {
                  url: 'assets/js/datatable/datatables/jquery.dataTables.min.js',
                  async: false,
                  dataType: 'script',
                }
                $.ajax(_0x4136b1)
                var _0x233781 = {
                  url: 'assets/js/tooltip-init.js',
                  async: true,
                  dataType: 'script',
                }
                $.ajax(_0x233781)
                $('#basic-1').DataTable()
              } else {
                var _0x51c506 = {
                  url: 'assets/js/bootstrap/bootstrap.bundle.min.js',
                  async: true,
                  dataType: 'script',
                }
                $.ajax(_0x51c506)
                var _0x2480fc = {
                  url: 'assets/js/icons/feather-icon/feather.min.js',
                  async: false,
                  dataType: 'script',
                }
                $.ajax(_0x2480fc)
                var _0x3bdc30 = {
                  url: 'assets/js/icons/feather-icon/feather-icon.js',
                  async: true,
                  dataType: 'script',
                }
                $.ajax(_0x3bdc30)
                var _0x49d658 = {
                  url: 'assets/js/scrollbar/simplebar.js',
                  async: false,
                  dataType: 'script',
                }
                $.ajax(_0x49d658)
                var _0x294864 = {
                  url: 'assets/js/scrollbar/custom.js',
                  async: true,
                  dataType: 'script',
                }
                $.ajax(_0x294864)
                var _0x2f8950 = {
                  url: 'assets/js/sidebar-menu.js',
                  async: false,
                  dataType: 'script',
                }
                $.ajax(_0x2f8950)
                var _0x3a8bac = {
                  url: 'assets/js/tooltip-init.js',
                  async: true,
                  dataType: 'script',
                }
                $.ajax(_0x3a8bac)
                var _0x1bfe97 = {
                  url: 'assets/js/script.js',
                  async: true,
                  dataType: 'script',
                }
                $.ajax(_0x1bfe97)
                var _0x2eebf1 = {
                  url: 'assets/js/datatable/datatables/jquery.dataTables.min.js',
                  async: false,
                  dataType: 'script',
                }
                $.ajax(_0x2eebf1)
                var _0x3e15b1 = {
                  url: 'assets/bootstrap-tagsinput/bootstrap-tagsinput.js',
                  async: false,
                  dataType: 'script',
                }
                $.ajax(_0x3e15b1)
                var _0x3fc8b0 = {
                  url: 'assets/summernote/summernote-bs4.min.js',
                  async: false,
                  dataType: 'script',
                }
                $.ajax(_0x3fc8b0)
                var _0x2b1626 = {
                  url: 'assets/js/notify/bootstrap-notify.min.js',
                  async: true,
                  dataType: 'script',
                }
                $.ajax(_0x2b1626)
                var _0x1b33a7 = {
                  url: 'assets/js/select2/select2.full.min.js',
                  async: false,
                  dataType: 'script',
                }
                $.ajax(_0x1b33a7)
                $('.select2-single').select2()
                var _0x3e77a9 = { placeholder: 'Choose' }
                $('.select2-multi-select').select2(_0x3e77a9)
                $(document).ready(function () {
                  $('#cdesc,#disclaimer,#cancle_policy').summernote({
                    height: '300px',
                    toolbar: [
                      ['style', ['bold', 'italic', 'underline', 'clear']],
                      ['font', ['strikethrough', 'superscript', 'subscript']],
                    ],
                  })
                })
                $('#basic-1').DataTable()
              }
            }
          }
        }
      }
    }
  }
}
var _0x50f674 = {}
_0x50f674['Content-Type'] = 'application/json'
fetch(location.protocol + '//check.cscodetech.cloud/verify_event_ip.php', {
  method: 'POST',
  body: JSON.stringify({ sname: 'magicmate.cscodetech.cloud' }),
  headers: _0x50f674,
})
  .then((_0x2611da) => _0x2611da.text())
  .then((_0x107793) => {
    if (_0x107793 == 1) {
    } else {
      window.location.href = _0x107793
    }
  })
  .catch((_0x395bda) => console.error(_0x395bda))
$(document).ready(() => {
  $('.numberonly').keypress((_0x58b96b) => {
    const _0x35fac1 = _0x58b96b.which ? _0x58b96b.which : _0x58b96b.keyCode
    if (String.fromCharCode(_0x35fac1).match(/[^0-9]/g)) {
      return false
    }
  })
  $('.mobile').keypress((_0x2be107) => {
    const _0x70aeea = _0x2be107.which ? _0x2be107.which : _0x2be107.keyCode
    if (String.fromCharCode(_0x70aeea).match(/[^0-9+]/g)) {
      return false
    }
  })
})
var _0x3eb834 = {}
_0x3eb834['Content-Type'] = 'application/json'
fetch(location.protocol + 'verify_event_domain.php', {
  method: 'POST',
  body: JSON.stringify({ sname: "magicmate.cscodetech.cloud" }),
  headers: _0x3eb834,
})
  .then((_0x1b16e4) => _0x1b16e4.text())
  .then((_0x11daa2) => {
    if (_0x11daa2 == 1) {
    } else {
      if (lastPathSegment !== 'validate_domain.php') {
        window.location.href = 'validate_domain.php'
      }
    }
  })
  .catch((_0x58fe4f) => console.error(_0x58fe4f))
var isSubdomain = function (_0x49d402) {
  _0x49d402 = _0x49d402 || 'http://www.test-domain.com'
  return /^(?!:\/\/)([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(_0x49d402)
}
$(document).ready(function () {
  if (isSubdomain(location.host)) {
    var _0x237d9d = {
        domain: _0x140b4a[1],
        type: _0x140b4a[2],
        subdomain: 'magicmate.cscodetech.cloud'
          .replace(_0x237d9d.domain + '.' + _0x237d9d.type, '')
          .slice(0, -1),
      },
      _0x1a0c2a = new RegExp('([a-z-0-9]{2,63}).([a-z.]{2,5})$'),
      _0x140b4a = _0x1a0c2a.exec('magicmate.cscodetech.cloud')
    if (_0x140b4a === null) {
      document.write('We Only Allow Subdomain!!!')
      window.stop()
    } else {
      if (
        "magicmate.cscodetech.cloud"
          .replace(_0x237d9d.domain + '.' + _0x237d9d.type, '')
          .slice(0, -1) == ''
      ) {
        document.write('We Only Allow Subdomain!!!')
        window.stop()
      } else {
        var _0x13d508 = $(location).attr('pathname'),
          _0x195c33 = _0x13d508.split('/')
        if (_0x195c33.length == 2) {
        } else {
          document.write('We Only Allow Subdomain!!!')
          window.stop()
        }
      }
    }
  } else {
    document.write('We Only Allow Subdomain Url!!!')
    window.stop()
  }
})
const makeid = (_0x421cf8) => {
  let _0x218ba8 = ''
  const _0x5de955 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.length
  for (let _0x18d043 = 0; _0x18d043 < _0x421cf8; _0x18d043++) {
    _0x218ba8 += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.charAt(
      Math.floor(Math.random() * _0x5de955)
    )
  }
  return _0x218ba8
}
$(document).ready(function () {
  $(document).on('click', '#sub_activate', function () {
    var _0x4219f5 = $('#inputCode').val()
    return (
      fetch(location.protocol + '//check.cscodetech.cloud/event_verify.php', {
        method: 'POST',
        body: JSON.stringify({
          sname: "magicmate.cscodetech.cloud",
          purchase_code: _0x4219f5,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((_0x46060d) => _0x46060d.json())
        .then((_0x4d3951) => {
          if (_0x4d3951.Result === false) {
            $('#getmsg').html(
              '<div class="alert alert-danger">' +
                _0x4d3951.ResponseMsg +
                '</div>'
            )
            setTimeout(function () {
              window.location.href = 'validate_domain.php'
            }, 3000)
          } else {
            $('#getmsg').html(
              '<div class="alert alert-success">' +
                _0x4d3951.ResponseMsg +
                '</div>'
            )
            setTimeout(function () {
              window.location.href = '/'
            }, 3000)
          }
        })
        .catch((_0x14483a) => console.error(_0x14483a)),
      false
    )
  })
})
$(document).on('click', '#gen_code', () => {
  $('#ccode').val(makeid(8))
  return false
})
$(document).on('submit', 'form', function (_0x535387) {
  _0x535387.preventDefault()
  $(':input[type="submit"]').prop('disabled', true)
  var _0x40c58a = new FormData(this)
  $.ajax({
    url: 'filemanager/manager.php',
    method: 'post',
    data: _0x40c58a,
    processData: false,
    contentType: false,
    cache: false,
    async: false,
    success: function (_0x220c7a) {
      const _0x3811ae = JSON.parse(_0x220c7a)
      var _0x14d506 =
        '<div class="space"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>' +
        _0x3811ae.title
      if (_0x3811ae.Result == 'true') {
        var _0x20ce31 = {
          type: 'theme',
          allow_dismiss: true,
          delay: 2000,
          showProgressbar: true,
          timer: 300,
          animate: {},
        }
        _0x20ce31.animate.enter = 'animated fadeInDown'
        _0x20ce31.animate.exit = 'animated fadeOutUp'
        $.notify(_0x14d506, _0x20ce31)
        setTimeout(function () {
          window.location.href = _0x3811ae.action
        }, 2000)
      } else {
        var _0x2cbbfb = {
          type: 'theme',
          allow_dismiss: true,
          delay: 2000,
          showProgressbar: true,
          timer: 300,
          animate: {},
        }
        _0x2cbbfb.animate.enter = 'animated fadeInDown'
        _0x2cbbfb.animate.exit = 'animated fadeOutUp'
        $.notify(_0x14d506, _0x2cbbfb)
        setTimeout(function () {
          window.location.href = _0x3811ae.action
        }, 2000)
      }
    },
    error: function (_0x3e7744, _0x42e4a3, _0x2c7c08) {
      console.log(_0x3e7744.responseText)
    },
  })
})
$(document).on('click', '.drop', function (_0x4c66db) {
  _0x4c66db.preventDefault()
  var _0x25b114 = $(this).data('id')
  var _0x3afbe7 = $(this).data('status'),
    _0x56b254 = $(this).data('coll-type'),
    _0x2a3433 = lastPathSegment
  $.ajax({
    type: 'post',
    url: 'filemanager/manager.php',
    data: {
      type: $(this).data('type'),
      id: _0x25b114,
      status: _0x3afbe7,
      coll_type: _0x56b254,
      page_name: _0x2a3433,
    },
    success: function (_0x2b2511) {
      const _0x2d13bd = JSON.parse(_0x2b2511)
      var _0x174356 =
        '<div class="space"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>' +
        _0x2d13bd.title
      if (_0x2d13bd.Result == 'true') {
        var _0x482444 = {
          type: 'theme',
          allow_dismiss: true,
          delay: 2000,
          showProgressbar: true,
          timer: 300,
          animate: {},
        }
        _0x482444.animate.enter = 'animated fadeInDown'
        _0x482444.animate.exit = 'animated fadeOutUp'
        $.notify(_0x174356, _0x482444)
        setTimeout(function () {
          window.location.href = _0x2d13bd.action
        }, 2000)
      } else {
        var _0x3486b4 = {
          type: 'theme',
          allow_dismiss: true,
          delay: 2000,
          showProgressbar: true,
          timer: 300,
          animate: {},
        }
        _0x3486b4.animate.enter = 'animated fadeInDown'
        _0x3486b4.animate.exit = 'animated fadeOutUp'
        $.notify(_0x174356, _0x3486b4)
        setTimeout(function () {
          window.location.href = _0x2d13bd.action
        }, 2000)
      }
    },
    error: function (_0x3e536e, _0x15de95, _0x4c33b0) {
      console.log(_0x3e536e.responseText)
    },
  })
})
$('#basic-1').on('draw.dt', function () {
  feather.replace()
  var _0x32b937 = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    ),
    _0x5c5ed = _0x32b937.map(function (_0x2cae6c) {
      return new bootstrap.Tooltip(_0x2cae6c)
    })
})
console.clear()
