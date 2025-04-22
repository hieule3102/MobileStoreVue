import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    global: {
      header: {
        logo: 'stabraq',
        nav: {
          men: 'Men',
          women: 'Women',
          kids: 'Kids',
          accessories: 'Accessories'
        },
        navList: {
          men: {
            allmen: 'ALL MEN',
            alltops: 'all tops',
            top: 'TOPS',
            top1: 'T-SHIRTS',
            top2: 'Graphics',
            top3: 'Grafit-tee',
            top4: 'Polo',
            top5: 'Shirts',
            top6: 'Long-Sleeves',
            top7: 'Hoodies',
            top8: 'Zippers',
            top9: 'Pullovers',
            top10: 'Jackets & Coats',
            allbott: 'all bottoms',
            bottom: 'BOTTOMS',
            bottom1: 'Jeans',
            bottom2: 'Jogger',
            bottom3: 'Sweatpants',
            bottom4: 'Shorts',
            alljil: 'all jilbab',
            jilbab: 'JILBAB',
            jilbab1: 'jilbab',
            allfeat: 'all featured',
            featured: 'FEATURED',
            shopallmen: 'SHOP ALL MEN',
            allaccess: 'all accessories',
            accessories: 'ACCESSORIES',
            accessories1: 'Socks',
            accessories2: 'Wallet',
            accessories3: 'Notebooks',
            accessories4: 'Gift Card',
            newarr: 'New Arrivals'
          },
          women: {
            allwomen: 'all women',
            alltops: 'all tops',
            top: 'TOPS',
            top1: 'Basics',
            top2: 'Graphics',
            top3: 'Zippers',
            top4: 'Pullovers',
            top5: 'Sweatshirts',
            bottom: 'BOTTOMS',
            allbottoms: 'all bottoms',
            bottom1: 'Skirts',
            dress: 'DRESSES & JUMPSITS',
            alldress: 'all dresses & jumpsuits',
            dress1: 'Dress',
            accessories: 'ACCESSORIES',
            allaccesswomen: 'all accessories',
            accessories1: 'Socks',
            accessories2: 'Scarf',
            accessories3: 'Notebooks',
            accessories4: 'Gift Card',
            featured: 'FEATURED',
            allfeatured: 'all featured',
            featured1: 'New Arrivals',
            shopallwomen: 'SHOP ALL WOMEN'
          },
          kids: {
            allkids: 'all kids',
            top1: 'Pants',
            top2: 'Graphics',
            top3: 'Zippers'
          }
        },
        cart: {
          emptyCart: {
            btn: 'CLOSE',
            header: 'YOUR BAG',
            pEmpty: 'Your cart is currently empty.',
            continueBtn: 'CONTINUE SHOPPING'
          },
          fullCart: {
            items: 'items',
            quant: 'Quantity: ',
            total: 'Total',
            shippingtitle: 'Shipping',
            shippingtaxes:
              'Taxes and shipping fee will be calculated at checkout',
            checkout: 'check out',
            viewcart: 'view cart'
          }
        },
        profile: {
          login: {
            header: 'CUSTOMER LOGIN:',
            eInput: 'Email Address',
            evalid: 'email must be correct',
            pInput: 'Password',
            pvalid: 'password must not be empty or less than 8 char',
            loginInput: 'LOGIN',
            forgotP: 'Forgot your password?',
            createBtn: 'CREATE AN ACCOUNT'
          },
          logout: {
            myacc: 'MY ACCOUNT',
            logoutBtn: 'LOG OUT'
          }
        },
        mywishlist: 'MY WISH LISTS',
        lang: 'Language',
        placeholders: {
          email: 'Email Address',
          pass: 'Password'
        }
      },
      footer: {
        disc: {
          disc1:
            'Stabraq Trendsetters is an all-Egyptian clothes brand. Driven by self-expression, we strive to reflect our beliefs through high quality, multi-featured products and effective and inspiring movements.',
          dics2: 'Address: 1 Mostafa El-Nahaas, Nasr City',
          dics3: 'Call us at: 01123399345',
          dics4: 'Email: Email'
        },
        shop: 'SHOP',
        info: 'INFORMATION',
        info1: 'About Us',
        info2: 'Contact Us',
        info3: 'Terms Of Service',
        info4: 'Refund Policy',
        payment: 'PAYMENT METHODS',
        rights: '2021 Stabraq TS Management Co. All Rights Reserved'
      }
    },
    homePage: {
      lookingfor: {
        title: 'I’m looking for..',
        tshirts: 'T-SHIRTS',
        pants: 'PANTS',
        women: 'WOMEN',
        kids: 'KIDS',
        bags: 'BAGS',
        accessories: 'ACCESSORIES'
      },
      newitems: {
        head: 'New items that you can’t miss out on',
        p: 'GRAPHICS COLLECTION'
      },
      trending: {
        head: 'Trending',
        sec1: 'T-SHIRTS',
        sec2: 'PANTS',
        sec3: 'ACCESSORIES'
      },
      furturetrend: {
        head: 'Furture Trendsetters',
        p: 'SHOP ALL'
      }
    },
    collectionPage: {
      sort: {
        head: 'Sort by',
        sort1: 'Featured',
        sort2: 'Price, low to high',
        sort3: 'Price, high to low',
        sort4: 'Date, old to new',
        sort5: 'Date, new to old',
        sort6: 'Best Selling',
        sort7: 'Alphabetically, A-Z',
        sort8: 'Alphabetically, Z-A'
      },
      viewas: 'View as'
    },
    checkoutPage: {
      show: 'Show',
      hide: 'Hide',
      ordersum: 'order summary',
      product: {
        giftcard: 'Gift card',
        apply: 'Apply',
        subtotal: 'subtotal',
        shipping: 'shipping',
        eshippingad: 'Enter shipping address',
        total: 'total',
        shippingpol: 'Shipping policy',
        shippingp:
          'Stabraq is not responsible for return shipping costs. Every shipping has to be paid by the customer, even if the item had free shipping in the first place, the customer has to pay for the shipping in return.',
        yconsent: 'Your Consent',
        consentp:
          'By using our website, registering an account, or making a purchase, you hereby consent to our Return & Refund Policy and agree to its terms.',
        refund: 'Changes To Our Return & Refund Policy',
        refundp:
          'Should we update, amend or make any changes to this document so that they accurately reflect our Service and policies. Unless otherwise required by law, those changes will be prominently posted here. Then, if you continue to use the Service, you will be bound by the updated Return & Refund Policy. If you do not want to agree to this or any updated Return & Refund Policy, you can delete your account.'
      },
      forms: {
        inputerror:
          'Your information is incorrect, please check your input fields',
        contact: 'Contact',
        haveacc: 'Have an account?',
        login: 'Log in',
        email: 'Email',
        emerror1: 'Email field must be correct',
        emerror2: 'Email field must not be empty',
        emerror3: 'Email field must not be empty or wrong',
        delivery: 'Delivery',
        ship: 'Ship',
        pickup: 'Pick up',
        countregion: 'country/Region',
        countregionerror: 'Country field must not be empty',
        fname: 'First name',
        fnameerror: 'First name must not be empty',
        lname: 'Last name',
        lnameerror: 'Last name must not be empty',
        address: 'Address',
        addresserror: 'Address must not be empty',
        city: 'City',
        cityerror: 'City field must not be empty',
        govern: 'Governorate',
        governerror: 'Governorate must no be empty',
        postal: 'Postal code',
        postalerror: 'Postal code must not be empty',
        phone: 'Phone',
        phoneoptional: 'Phone (optional)',
        phonemass1: 'In case we need to',
        phonemass2: 'contact you about your order',
        phoneerror: 'Phone must not be empty',
        savefornext: 'Save this information for next time',
        textme: 'Text me with news and offers',
        shippingmeth: 'shipping-methods',
        aramex: 'Aramex Office',
        doorshipp: 'Doorstep shipping',
        pickuplock: 'Pickup locations',
        pickupp: 'There is 1 store with stock close to your location',
        onlinestore: 'Online Store',
        onlinestorep: '1 Mostafa El-Nahaas, 1st Floor, C, Nasr City',
        info: 'Free',
        infop: 'Usually ready in 24 hours',
        payment: 'Payment',
        paymentp: 'All transactions are secure and encrypted.',
        cards: 'Pay via (Debit/Credit cards/Wallets/Installments)',
        cardsp:
          'After clicking “Pay now”, you will be redirected to Pay via (Debit/Credit cards/Wallets/Installments) to complete your purchase securely.',
        cod: 'Cash on Delivery (COD)',
        billingad: 'Billing address',
        sameas: 'Same as shipping address',
        usediff: 'Use a different billing address',
        footer: {
          refund: 'Refund policy',
          prpol: 'Privacy policy',
          terms: 'Terms of service',
          contact: 'Contact information'
        }
      },
      placeholders: {
        email: 'Email',
        fname: 'First name',
        lname: 'Last name',
        address: 'Address',
        city: 'City',
        postalc: 'Postal code',
        phone: 'Phone',
        phoneoptional: 'Phone (optional)'
      }
    },
    cartPage: {
      head: 'My Cart',
      emptycart: 'Your cart is currently empty.',
      continuebrows: 'Continue browsing',
      here: 'here',
      prod: 'product',
      info: 'info',
      price: 'Price:',
      quan: 'Quantity:',
      total: 'Total:',
      ordersum: 'order summary',
      addcom: 'Additional comments',
      proceed: 'proceed to checkout',
      contshopping: 'continue shopping',
      related: 'Related Products',
      commentplaceh: 'Special instruction for seller'
    },
    cardInfoPage: {
      colors: 'Colors:',
      size: 'Size:',
      addtcard: 'Add to cart',
      buytnow: 'buy it now',
      pickupp1: 'PICKUP AVAILABLE AT',
      pickupp2: 'ONLINE STORE',
      pickupp3: 'Usually ready in 24 hours',
      viewinfo: 'view store info',
      onlines: 'online store',
      pickupp: 'Pickup available, usually ready in 24 hours',
      add1: '1 Mostafa El-Nahaas',
      add2: '1st Floor',
      add3: 'C',
      add4: 'Nasr City',
      add5: '4441525',
      add6: 'Egypt',
      add7: '+20222737773',
      sizechart: 'Size Chart',
      chest: 'chest',
      chestp:
        'To measure the chest: First, put the product on a flat surface, then measure between the two ends below armhole.',
      length: 'length',
      lengthp:
        'To measure the length of the product: First, put the product on a flat surface, then measure from the highest point of the shoulder down to the products bottom hem.',
      related: 'Related Products'
    },
    accountRegister: {
      head: 'ACCOUNT',
      newcus: 'NEW CUSTOMER',
      signupp:
        'Register with us for a faster checkout, to track the status of your order and more.',
      fname: 'First Name',
      fnameerror: 'first name must not be empty',
      lname: 'Last Name',
      lnameerror: 'last name must not be empty',
      emailadd: 'Your Email Address',
      enailadderror: 'email must be correct',
      pass: 'Your Password',
      passerror: 'password must not be empty or less than 8 char',
      createacc: 'create an account',
      or: 'OR',
      returner: 'RETURNING CUSTOMER',
      signinp:
        'If you already have an account, enter your email and password information.',
      uemail: 'Email Address',
      uemailerror: 'email must be correct',
      upass: 'Password',
      upasserror: 'password must not be empty or less than 8 char',
      login: 'login',
      placeholders: {
        fname: 'First Name',
        lname: 'Last Name',
        yemail: 'Your Email Address',
        ypass: 'Your Password',
        emailadd: 'Email Address',
        passadd: 'Password'
      }
    },
    accountPage: {
      head: 'MY ACCOUNT',
      orderhis: 'ORDER HISTORY',
      order: 'order',
      date: 'date',
      paymentstat: 'payment status',
      fulfillment: 'fulfillment status',
      total: 'total',
      emptyhistory: 'Your order history is currently empty.',
      contbrowsing: 'Continue browsing',
      here: 'here'
    },
    information: {
      aboutus: {
        head: 'ABOUT US',
        text1:
          'Stabraq Trendsetters is the number one detail oriented all-Egyptian clothes brand.',
        text2:
          'Driven by self-expression, we strive to reflect our beliefs through high quality, multi-featured products and effective and inspiring movements.',
        text3:
          'Check out this video to get an idea of who we are, and how we work.'
      },
      contactus: {
        head: 'DROP US A LINE',
        haveaq:
          'Have a question or comment? Use the form below to send us a message or contact us by mail at:',
        yname: 'Your Name',
        yphone: 'Your Phone',
        yemail: 'Your Email',
        ycomment: 'Your Comment',
        submit: 'submit contact',
        storeinfo: 'STORE INFORMATION',
        storeinfop1: 'We would love to hear from you - please use the',
        storeinfop2: 'form to send us your message or ideas. Or',
        storeinfop3: 'simply pop in for a cup of fresh tea and a',
        storeinfop4: 'cookie:',
        storeinfop5: 'Address: 1 Mostafa El-Nahaas, Nasr City,',
        storeinfop6: 'Cairo',
        storeinfop7: 'Email: EMAIL',
        storeinfop8: 'Mobile: 002-01123399345',
        storeinfop9: 'Opening Hours:',
        storeinfop10: 'Sunday to Thursday: 12pm - 12am',
        storeinfop11: 'Fridays: 1pm - 12am'
      },
      termsofserv: {
        head: 'Terms of service'
      },
      refundpol: {
        head: 'Refund policy'
      }
    },
    ui: {
      basesidebar: {
        close: 'CLOSE'
      },
      editex: {
        prodoptions: 'product options',
        editquan: 'Quantity:',
        editcolor: 'Colors:',
        editsize: 'Size:',
        addtocart: 'add to cart'
      },
      popup: {
        added: 'is added to your shopping cart.',
        continueshopping: 'continue shopping',
        gotocart: 'go to cart'
      },
      thanky: {
        confirmed: 'Your order is confirmed',
        confp: 'You’ll receive an email when your order is ready for pickup.',
        btn: 'continue shopping'
      }
    },
    errorAndNote: {
      collectionPage: {
        yoursearch1: 'YOUR SEARCH FOR ',
        yoursearch2: ' REVEALED THE FOLLOWING:',
        nodata1: 'Sorry, u didnt add any product to your wishlist',
        nodata2: 'Sorry, there are no products in this collection',
        nodata3: 'Sorry, there are no products match this search',
        dataerror: 'something went wrong'
      },
      accountPage: {
        loadorder: 'load orders faild'
      },
      header: {
        loadSpinLangError: 'changing lang went wrong',
        logoutError: 'logout went wrong'
      },
      store: {
        mainStore: {
          responsefiled: 'failed load products'
        },
        authModule: {
          signupfiled: 'Something went wrong please try again later',
          signinfiled: 'Incorrect email address or password, please try again'
        },
        ordersModule: {
          setorderfiled: 'failed to send order',
          fetchordersfiled: 'failed to get order'
        }
      }
    }
  },
  vi: {
    global: {
      header: {
        logo: 'stabraq',
        nav: {
          men: 'Nam',
          women: 'Nữ',
          kids: 'Trẻ em',
          accessories: 'Phụ kiện'
        },
        navList: {
          men: {
            allmen: 'TẤT CẢ NAM',
            alltops: 'Tất cả áo',
            top: 'ÁO',
            top1: 'ÁO THUN',
            top2: 'Họa tiết',
            top3: 'Áo đồ họa',
            top4: 'Polo',
            top5: 'Áo sơ mi',
            top6: 'Áo dài tay',
            top7: 'Áo hoodie',
            top8: 'Áo khoác kéo',
            top9: 'Áo pullover',
            top10: 'Áo khoác & Áo mưa',
            allbott: 'Tất cả quần',
            bottom: 'QUẦN',
            bottom1: 'Jeans',
            bottom2: 'Jogger',
            bottom3: 'Quần thể thao',
            bottom4: 'Quần đùi',
            alljil: 'Tất cả jilbab',
            jilbab: 'JILBAB',
            jilbab1: 'Jilbab',
            allfeat: 'Tất cả nổi bật',
            featured: 'NỔI BẬT',
            shopallmen: 'MUA TẤT CẢ NAM',
            allaccess: 'Tất cả phụ kiện',
            accessories: 'PHỤ KIỆN',
            accessories1: 'Tất tất',
            accessories2: 'Ví',
            accessories3: 'Sổ tay',
            accessories4: 'Thẻ quà tặng',
            newarr: 'Sản phẩm mới'
          },
          women: {
            allwomen: 'Tất cả nữ',
            alltops: 'Tất cả áo',
            top: 'ÁO',
            top1: 'Cơ bản',
            top2: 'Họa tiết',
            top3: 'Áo kéo',
            top4: 'Áo pullover',
            top5: 'Áo nỉ',
            bottom: 'QUẦN',
            allbottoms: 'Tất cả quần',
            bottom1: 'Váy',
            dress: 'VÁY & JUMPSUIT',
            alldress: 'Tất cả váy & jumpsuit',
            dress1: 'Váy',
            accessories: 'PHỤ KIỆN',
            allaccesswomen: 'Tất cả phụ kiện nữ',
            accessories1: 'Tất tất',
            accessories2: 'Khăn quàng',
            accessories3: 'Sổ tay',
            accessories4: 'Thẻ quà tặng',
            featured: 'NỔI BẬT',
            allfeatured: 'Tất cả nổi bật',
            featured1: 'Sản phẩm mới',
            shopallwomen: 'MUA TẤT CẢ NỮ'
          },
          kids: {
            allkids: 'Tất cả trẻ em',
            top1: 'Quần',
            top2: 'Họa tiết',
            top3: 'Áo kéo'
          }
        },
        cart: {
          emptyCart: {
            btn: 'ĐÓNG',
            header: 'GIỎ HÀNG CỦA BẠN',
            pEmpty: 'Giỏ hàng của bạn hiện tại trống.',
            continueBtn: 'TIẾP TỤC MUA SẮM'
          },
          fullCart: {
            items: 'sản phẩm',
            quant: 'Số lượng: ',
            total: 'Tổng cộng',
            shippingtitle: 'Vận chuyển',
            shippingtaxes: 'Thuế và phí vận chuyển sẽ được tính khi thanh toán',
            checkout: 'thanh toán',
            viewcart: 'xem giỏ hàng'
          }
        },
        profile: {
          login: {
            header: 'ĐĂNG NHẬP KHÁCH HÀNG:',
            eInput: 'Địa chỉ email',
            evalid: 'email phải chính xác',
            pInput: 'Mật khẩu',
            pvalid: 'mật khẩu không được rỗng hoặc ít hơn 8 ký tự',
            loginInput: 'ĐĂNG NHẬP',
            forgotP: 'Quên mật khẩu?',
            createBtn: 'TẠO TÀI KHOẢN'
          },
          logout: {
            myacc: 'TÀI KHOẢN CỦA TÔI',
            logoutBtn: 'ĐĂNG XUẤT'
          }
        },
        mywishlist: 'DANH SÁCH ƯA THÍCH CỦA TÔI',
        lang: 'Ngôn ngữ',
        placeholders: {
          email: 'Địa chỉ email',
          pass: 'Mật khẩu'
        }
      },
      footer: {
        disc: {
          disc1:
            'Stabraq Trendsetters là thương hiệu thời trang toàn Ai Cập. Với tôn chỉ tự thể hiện, chúng tôi phấn đấu phản ánh những giá trị của mình qua các sản phẩm chất lượng cao, tính năng đa dạng và những phong trào hiệu quả, truyền cảm hứng.',
          dics2: 'Địa chỉ: 1 Mostafa El-Nahaas, Nasr City',
          dics3: 'Gọi chúng tôi qua: 01123399345',
          dics4: 'Email: Email'
        },
        shop: 'MUA SẮM',
        info: 'THÔNG TIN',
        info1: 'Về chúng tôi',
        info2: 'Liên hệ với chúng tôi',
        info3: 'Điều khoản dịch vụ',
        info4: 'Chính sách hoàn tiền',
        payment: 'PHƯƠNG THỨC THANH TOÁN',
        rights: '2021 Stabraq TS Management Co. Bản quyền đã được bảo lưu'
      }
    },
    homePage: {
      lookingfor: {
        title: 'Tôi đang tìm...',
        tshirts: 'ÁO THUN',
        pants: 'QUẦN',
        women: 'PHỤ NỮ',
        kids: 'TRẺ EM',
        bags: 'TÚI XÁCH',
        accessories: 'PHỤ KIỆN'
      },
      newitems: {
        head: 'Sản phẩm mới bạn không thể bỏ qua',
        p: 'BỘ SƯU TẬP ĐỒ HỌA'
      },
      trending: {
        head: 'Xu hướng',
        sec1: 'ÁO THUN',
        sec2: 'QUẦN',
        sec3: 'PHỤ KIỆN'
      },
      furturetrend: {
        head: 'Những người dẫn đầu xu hướng tương lai',
        p: 'MUA TẤT CẢ'
      }
    },
    collectionPage: {
      sort: {
        head: 'Sắp xếp theo',
        sort1: 'Nổi bật',
        sort2: 'Giá, từ thấp đến cao',
        sort3: 'Giá, từ cao đến thấp',
        sort4: 'Ngày, cũ đến mới',
        sort5: 'Ngày, mới đến cũ',
        sort6: 'Bán chạy',
        sort7: 'Theo thứ tự chữ cái, A-Z',
        sort8: 'Theo thứ tự chữ cái, Z-A'
      },
      viewas: 'Xem như'
    },
    checkoutPage: {
      show: 'Hiển thị',
      hide: 'Ẩn',
      ordersum: 'Tóm tắt đơn hàng',
      product: {
        giftcard: 'Thẻ quà tặng',
        apply: 'Áp dụng',
        subtotal: 'Tổng phụ',
        shipping: 'Vận chuyển',
        eshippingad: 'Nhập địa chỉ giao hàng',
        total: 'Tổng cộng',
        shippingpol: 'Chính sách vận chuyển',
        shippingp:
          'Stabraq không chịu trách nhiệm chi phí vận chuyển trả lại. Mọi chi phí vận chuyển phải được khách hàng thanh toán, ngay cả khi sản phẩm ban đầu có miễn phí vận chuyển, khách hàng vẫn phải trả phí vận chuyển khi trả hàng.',
        yconsent: 'Sự đồng ý của bạn',
        consentp:
          'Bằng cách sử dụng website của chúng tôi, đăng ký tài khoản hoặc mua hàng, bạn đồng ý với Chính sách Hoàn trả & Hoàn tiền của chúng tôi và các điều khoản của nó.',
        refund: 'Thay đổi chính sách hoàn tiền',
        refundp:
          'Nếu chúng tôi cập nhật, sửa đổi hoặc thay đổi tài liệu này để phản ánh chính xác dịch vụ và chính sách của chúng tôi. Trừ khi pháp luật yêu cầu khác, những thay đổi này sẽ được đăng tải rõ ràng ở đây. Nếu bạn tiếp tục sử dụng dịch vụ, bạn sẽ bị ràng buộc bởi chính sách hoàn tiền đã cập nhật.'
      },
      forms: {
        inputerror:
          'Thông tin của bạn không chính xác, vui lòng kiểm tra lại các trường nhập liệu',
        contact: 'Liên hệ',
        haveacc: 'Có tài khoản?',
        login: 'Đăng nhập',
        email: 'Email',
        emerror1: 'Trường email phải chính xác',
        emerror2: 'Trường email không được để trống',
        emerror3: 'Trường email không được để trống hoặc sai',
        delivery: 'Giao hàng',
        ship: 'Giao hàng tận nhà',
        pickup: 'Nhận tại cửa hàng',
        countregion: 'Quốc gia/Khu vực',
        countregionerror: 'Trường quốc gia không được để trống',
        fname: 'Tên',
        fnameerror: 'Tên không được để trống',
        lname: 'Họ',
        lnameerror: 'Họ không được để trống',
        address: 'Địa chỉ',
        addresserror: 'Địa chỉ không được để trống',
        city: 'Thành phố',
        cityerror: 'Trường thành phố không được để trống',
        govern: 'Tỉnh/Thành phố',
        governerror: 'Trường tỉnh/thành phố không được để trống',
        postal: 'Mã bưu điện',
        postalerror: 'Mã bưu điện không được để trống',
        phone: 'Số điện thoại',
        phoneoptional: 'Điện thoại (tùy chọn)',
        phonemass1: 'Trong trường hợp chúng tôi cần',
        phonemass2: 'liên hệ với bạn về đơn hàng',
        phoneerror: 'Số điện thoại không được để trống',
        savefornext: 'Lưu thông tin này cho lần sau',
        textme: 'Gửi tin nhắn cho tôi về tin tức và ưu đãi',
        shippingmeth: 'Phương thức vận chuyển',
        aramex: 'Văn phòng Aramex',
        doorshipp: 'Giao hàng tận nhà',
        pickuplock: 'Điểm nhận hàng',
        pickupp: 'Có 1 cửa hàng có hàng gần vị trí của bạn',
        onlinestore: 'Cửa hàng trực tuyến',
        onlinestorep: '1 Mostafa El-Nahaas, Tầng 1, C, Nasr City',
        info: 'Miễn phí',
        infop: 'Thường sẵn sàng trong 24 giờ',
        payment: 'Thanh toán',
        paymentp: 'Tất cả giao dịch đều được bảo mật và mã hóa.',
        cards: 'Thanh toán qua (Thẻ ghi nợ/Thẻ tín dụng/Ví/Trả góp)',
        cardsp:
          'Sau khi nhấp vào “Thanh toán ngay”, bạn sẽ được chuyển hướng để hoàn thành thanh toán qua (Thẻ ghi nợ/Thẻ tín dụng/Ví/Trả góp) một cách bảo mật.',
        cod: 'Thanh toán khi nhận hàng (COD)',
        billingad: 'Địa chỉ thanh toán',
        sameas: 'Giống với địa chỉ giao hàng',
        usediff: 'Sử dụng địa chỉ thanh toán khác',
        footer: {
          refund: 'Chính sách hoàn tiền',
          prpol: 'Chính sách bảo mật',
          terms: 'Điều khoản dịch vụ',
          contact: 'Thông tin liên hệ'
        }
      },
      placeholders: {
        email: 'Email',
        fname: 'Tên',
        lname: 'Họ',
        address: 'Địa chỉ',
        city: 'Thành phố',
        postalc: 'Mã bưu điện',
        phone: 'Điện thoại',
        phoneoptional: 'Điện thoại (tùy chọn)'
      }
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  messages
})

export default i18n
