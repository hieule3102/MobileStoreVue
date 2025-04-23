import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    global: {
      header: {
        logo: 'HiepMobile',
        nav: {
          men: 'Phones, Tablets',
          women: 'Laptops',
          kids: 'Watches, Cameras',
          accessories: 'Accessories'
        },
        navList: {
          men: {
            allmen: 'ALL PHONES',
            alltops: 'All phones',
            top: 'iPhone',
            top1: 'Xiaomi',
            top2: 'Samsung',
            top3: 'Oppo',
            top4: 'Realme',
            top5: 'Vivo',
            top6: 'Nokia',
            top7: 'Motorola',
            top8: 'Asus',
            top9: 'Tecno',
            top10: 'Infinix',

            allbott: 'ALL TABLETS',
            bottom: 'TABLETS',
            bottom1: 'iPad',
            bottom2: 'Samsung Tab',
            bottom3: 'Xiaomi Pad',
            bottom4: 'Lenovo Tab',

            alljil: 'ALL PHONE & TABLET ACCESSORIES',
            jilbab: 'ACCESSORIES',
            jilbab1: 'Phone Cases',
            jilbab2: 'Charging Cables',
            jilbab3: 'Headphones',
            jilbab4: 'Stands',
            jilbab5: 'Memory Cards',
            jilbab6: 'Power Banks',
            jilbab7: 'Screen Protectors',
            jilbab8: 'Stylus Pens',

            allfeat: 'ALL FEATURED',
            featured: 'FEATURED',
            shopallmen: 'BUY ALL PHONES & TABLETS',
            allaccess: 'ALL OTHER ACCESSORIES',
            accessories: 'OTHER ACCESSORIES',
            accessories1: 'Fitness Trackers',
            accessories2: 'Bluetooth Speakers',
            accessories3: 'Chargers',
            accessories4: 'LED Livestream Lights',
            newarr: 'New Arrivals'
          },
          women: {
            allwomen: 'ALL LAPTOPS',
            alltops: 'All laptops',
            top: 'LAPTOPS',
            top1: 'MacBook',
            top2: 'Dell',
            top3: 'HP',
            top4: 'Asus',
            top5: 'Acer',

            bottom: 'SEGMENTS',
            allbottoms: 'All segments',
            bottom1: 'Office – Study',
            dress: 'SPECIALIZED',
            alldress: 'All specialized lines',
            dress1: 'Gaming',
            dress2: 'Graphics – Engineering',
            dress3: 'Business – Premium',

            accessories: 'LAPTOP ACCESSORIES',
            allaccesswomen: 'All laptop accessories',
            accessories1: 'Mice',
            accessories2: 'Keyboards',
            accessories3: 'Laptop Sleeves',
            accessories4: 'Laptop Backpacks',

            featured: 'FEATURED',
            allfeatured: 'All featured',
            featured1: 'New Products',
            shopallwomen: 'BUY ALL LAPTOPS'
          },
          kids: {
            allkids: 'ALL WATCHES',
            top1: 'Men\'s Watches',
            top2: 'Women\'s Watches',
            top3: 'Sports Watches'
          }
        },
        cart: {
          emptyCart: {
            btn: 'CLOSE',
            header: 'YOUR CART',
            pEmpty: 'Your cart is currently empty.',
            continueBtn: 'CONTINUE SHOPPING'
          },
          fullCart: {
            items: 'items',
            quant: 'Quantity: ',
            total: 'Total',
            shippingtitle: 'Shipping',
            shippingtaxes:
              'Taxes and shipping fees will be calculated at checkout',
            checkout: 'checkout',
            viewcart: 'view cart'
          }
        },
        profile: {
          login: {
            header: 'CUSTOMER LOGIN:',
            eInput: 'Email address',
            evalid: 'Email must be valid',
            pInput: 'Password',
            pvalid: 'Password cannot be empty or less than 8 characters',
            loginInput: 'LOG IN',
            forgotP: 'Forgot password?',
            createBtn: 'CREATE ACCOUNT'
          },
          logout: {
            myacc: 'MY ACCOUNT',
            logoutBtn: 'LOG OUT'
          }
        },
        mywishlist: 'MY WISHLIST',
        lang: 'Language',
        placeholders: {
          email: 'Email address',
          pass: 'Password'
        }
      },
      footer: {
        disc: {
          disc1:
            'HiepMobile is a store specializing in high-end mobile phones in Da Nang. Committed to providing customers with quality phones, attentive customer service, and the latest technology products, HiepMobile is always the top choice for tech enthusiasts.',
          dics2: 'Address: District 3, Da Nang',
          dics3: 'Call us at: 0901234567',
          dics4: 'Email: Email'
        },
        shop: 'SHOP',
        info: 'INFORMATION',
        info1: 'About HiepMobile',
        info2: 'Contact Us',
        info3: 'Terms of Service',
        info4: 'Warranty Policy',
        payment: 'PAYMENT METHODS',
        rights: '2025 HiepMobile. All rights reserved'
      }
    },
    homePage: {
      lookingfor: {
        title: 'I am looking for...',
        tshirts: 'PHONES',
        pants: 'LAPTOPS',
        women: 'WATCHES',
        kids: 'PHONE ACCESSORIES',
        bags: 'LAPTOP ACCESSORIES',
        accessories: 'WATCH ACCESSORIES'
      },
      newitems: {
        head: 'New products you cannot miss',
        p: 'PHONE, LAPTOP AND WATCH COLLECTION'
      },
      trending: {
        head: 'Trending',
        sec1: 'PHONES',
        sec2: 'LAPTOPS',
        sec3: 'WATCHES'
      },
      furturetrend: {
        head: 'Future Trendsetters',
        p: 'BUY ALL'
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
          'HiepMobile is not responsible for return shipping costs. Every shipping has to be paid by the customer, even if the item had free shipping in the first place, the customer has to pay for the shipping in return.',
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
      addtcard: 'Add to Cart',
      buytnow: 'Buy Now',
      pickupp1: 'PICK UP AT',
      pickupp2: 'ONLINE STORE',
      pickupp3: 'Usually available within 24 hours',
      viewinfo: 'view store information',
      onlines: 'online store',
      pickupp: 'Available for pickup, usually ready within 24 hours',
      add1: '1 District 3',
      add2: 'Floor 1',
      add3: 'C',
      add4: 'Da Nang City',
      add5: '4441525',
      add6: 'Vietnam',
      add7: '+20222737773',
      sizechart: 'Phone Size Chart',
      chest: 'Screen Size',
      chestp:
        'To measure the screen size: Measure from the top left corner to the bottom right corner of the phone screen.',
      length: 'Phone Length',
      lengthp:
        'To measure the phone length: Place the phone on a flat surface, then measure from the highest point to the lowest point of the phone.',
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
          'Hiep Mobile is a reputable phone store in Da Nang, specializing in offering genuine phones from top brands.',
        text2:
          'We are committed to providing high-quality products, dedicated service, and reasonable prices. At Hiep Mobile, you will find the latest phones, accessories, and professional repair services.',
        text3:
          'Watch this video to learn more about us and how we serve our customers.'
      },
      contactus: {
        head: 'CONTACT US',
        haveaq:
          'Do you have any questions or suggestions? Please use the form below to send a message or contact us via email:',
        yname: 'Your Name',
        yphone: 'Your Phone Number',
        yemail: 'Your Email',
        ycomment: 'Your Comment',
        submit: 'Send Contact',
        storeinfo: 'STORE INFORMATION',
        storeinfop1: 'We always want to hear from you - please use',
        storeinfop2: 'the form to send a message or suggestion.',
        storeinfop3: 'Or visit us for tea and cookies:',
        storeinfop4: 'cookie:',
        storeinfop5: 'Address: 1 abc, Da Nang City,',
        storeinfop6: 'XYZ',
        storeinfop7: 'Email: EMAIL',
        storeinfop8: 'Phone: 002-01123399345',
        storeinfop9: 'Opening Hours:',
        storeinfop10: 'Sunday to Thursday: 12 PM - 12 AM',
        storeinfop11: 'Friday: 1 PM - 12 AM'
      },
      termsofserv: {
        head: 'Terms of Service'
      },
      refundpol: {
        head: 'Refund Policy'
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
        logo: 'HiepMobile',
        nav: {
          men: 'Điện thoại, Tablet',
          women: 'Laptop',
          kids: 'Đồng hồ, Camera',
          accessories: 'Phụ kiện'
        },
        navList: {
          men: {
            allmen: 'TẤT CẢ ĐIỆN THOẠI',
            alltops: 'Tất cả điện thoại',
            top: 'iPhone',
            top1: 'Xiaomi',
            top2: 'Samsung',
            top3: 'Oppo',
            top4: 'Realme',
            top5: 'Vivo',
            top6: 'Nokia',
            top7: 'Motorola',
            top8: 'Asus',
            top9: 'Tecno',
            top10: 'Infinix',

            allbott: 'Tất cả máy tính bảng',
            bottom: 'MÁY TÍNH BẢNG',
            bottom1: 'iPad',
            bottom2: 'Samsung Tab',
            bottom3: 'Xiaomi Pad',
            bottom4: 'Lenovo Tab',

            alljil: 'Tất cả phụ kiện điện thoại & tablet',
            jilbab: 'PHỤ KIỆN',
            jilbab1: 'Ốp lưng',
            jilbab2: 'Cáp sạc',
            jilbab3: 'Tai nghe',
            jilbab4: 'Giá đỡ',
            jilbab5: 'Thẻ nhớ',
            jilbab6: 'Pin dự phòng',
            jilbab7: 'Dán màn hình',
            jilbab8: 'Bút cảm ứng',

            allfeat: 'Tất cả nổi bật',
            featured: 'NỔI BẬT',
            shopallmen: 'MUA TẤT CẢ ĐIỆN THOẠI & TABLET',
            allaccess: 'Tất cả phụ kiện khác',
            accessories: 'PHỤ KIỆN KHÁC',
            accessories1: 'Thiết bị theo dõi',
            accessories2: 'Loa Bluetooth',
            accessories3: 'Củ sạc',
            accessories4: 'Đèn LED livestream',
            newarr: 'Sản phẩm mới'
          },
          women: {
            allwomen: 'TẤT CẢ LAPTOP',
            alltops: 'Tất cả laptop',
            top: 'LAPTOP',
            top1: 'MacBook',
            top2: 'Dell',
            top3: 'HP',
            top4: 'Asus',
            top5: 'Acer',

            bottom: 'PHÂN KHÚC',
            allbottoms: 'Tất cả phân khúc',
            bottom1: 'Văn phòng – học tập',
            dress: 'CHUYÊN DỤNG',
            alldress: 'Tất cả dòng chuyên dụng',
            dress1: 'Gaming',
            dress2: 'Đồ họa – Kỹ thuật',
            dress3: 'Doanh nhân – Cao cấp',

            accessories: 'PHỤ KIỆN LAPTOP',
            allaccesswomen: 'Tất cả phụ kiện laptop',
            accessories1: 'Chuột',
            accessories2: 'Bàn phím',
            accessories3: 'Túi chống sốc',
            accessories4: 'Balo laptop',

            featured: 'NỔI BẬT',
            allfeatured: 'Tất cả nổi bật',
            featured1: 'Sản phẩm mới',
            shopallwomen: 'MUA TẤT CẢ LAPTOP'
          },
          kids: {
            allkids: 'TẤT CẢ ĐỒNG HỒ',
            top1: 'Đồng hồ nam',
            top2: 'Đồng hồ nữ',
            top3: 'Đồng hồ thể thao'
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
            'HiepMobile là cửa hàng chuyên cung cấp các sản phẩm điện thoại di động cao cấp tại Đà Nẵng. Với cam kết mang đến cho khách hàng những chiếc điện thoại chất lượng, dịch vụ chăm sóc khách hàng tận tình và những sản phẩm công nghệ mới nhất, HiepMobile luôn là sự lựa chọn hàng đầu cho những tín đồ yêu công nghệ.',
          dics2: 'Địa chỉ: Quận 3, Đà Nẵng',
          dics3: 'Gọi chúng tôi qua: 0901234567',
          dics4: 'Email: Email'
        },
        shop: 'MUA SẮM',
        info: 'THÔNG TIN',
        info1: 'Về HiepMobile',
        info2: 'Liên hệ với chúng tôi',
        info3: 'Điều khoản dịch vụ',
        info4: 'Chính sách bảo hành',
        payment: 'PHƯƠNG THỨC THANH TOÁN',
        rights: '2025 HiepMobile. Bản quyền đã được bảo lưu'
      }
    },
    homePage: {
      lookingfor: {
        title: 'Tôi đang tìm...',
        tshirts: 'ĐIỆN THOẠI',
        pants: 'LAPTOP',
        women: 'ĐỒNG HỒ',
        kids: 'PHỤ KIỆN ĐIỆN THOẠI',
        bags: 'PHỤ KIỆN LAPTOP',
        accessories: 'PHỤ KIỆN ĐỒNG HỒ'
      },
      newitems: {
        head: 'Sản phẩm mới bạn không thể bỏ qua',
        p: 'BỘ SƯU TẬP ĐIỆN THOẠI, LAPTOP VÀ ĐỒNG HỒ'
      },
      trending: {
        head: 'Xu hướng',
        sec1: 'ĐIỆN THOẠI',
        sec2: 'LAPTOP',
        sec3: 'ĐỒNG HỒ'
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
          'HiepMobile không chịu trách nhiệm chi phí vận chuyển trả lại. Mọi chi phí vận chuyển phải được khách hàng thanh toán, ngay cả khi sản phẩm ban đầu có miễn phí vận chuyển, khách hàng vẫn phải trả phí vận chuyển khi trả hàng.',
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
    },
    cartPage: {
      head: 'Giỏ hàng của tôi',
      emptycart: 'Giỏ hàng của bạn hiện đang trống.',
      continuebrows: 'Tiếp tục mua sắm',
      here: 'tại đây',
      prod: 'sản phẩm',
      info: 'thông tin',
      price: 'Giá:',
      quan: 'Số lượng:',
      total: 'Tổng:',
      ordersum: 'tóm tắt đơn hàng',
      addcom: 'Ghi chú thêm',
      proceed: 'tiến hành thanh toán',
      contshopping: 'tiếp tục mua sắm',
      related: 'Sản phẩm liên quan',
      commentplaceh: 'Ghi chú đặc biệt cho người bán'
    },
    cardInfoPage: {
      colors: 'Màu sắc:',
      size: 'Kích thước:',
      addtcard: 'Thêm vào giỏ hàng',
      buytnow: 'mua ngay',
      pickupp1: 'CÓ THỂ NHẬN HÀNG TẠI',
      pickupp2: 'CỬA HÀNG TRỰC TUYẾN',
      pickupp3: 'Thường sẵn sàng trong vòng 24 giờ',
      viewinfo: 'xem thông tin cửa hàng',
      onlines: 'cửa hàng trực tuyến',
      pickupp: 'Có thể nhận hàng, thường sẵn sàng trong 24 giờ',
      add1: '1 Quận 3',
      add2: 'Tầng 1',
      add3: 'C',
      add4: 'Đà Nẵng City',
      add5: '4441525',
      add6: 'Việt Nam',
      add7: '+20222737773',
      sizechart: 'Bảng kích thước điện thoại',
      chest: 'Kích thước màn hình',
      chestp:
        'Để đo kích thước màn hình: Đo từ góc trên cùng bên trái đến góc dưới cùng bên phải của màn hình điện thoại.',
      length: 'Kích thước điện thoại',
      lengthp:
        'Để đo chiều dài của điện thoại: Đặt điện thoại trên bề mặt phẳng, sau đó đo từ điểm cao nhất đến điểm thấp nhất của điện thoại.',
      related: 'Sản phẩm liên quan'
    },
    accountRegister: {
      head: 'TÀI KHOẢN',
      newcus: 'KHÁCH HÀNG MỚI',
      signupp:
        'Đăng ký để thanh toán nhanh hơn, theo dõi đơn hàng và nhiều hơn nữa.',
      fname: 'Tên',
      fnameerror: 'Tên không được để trống',
      lname: 'Họ',
      lnameerror: 'Họ không được để trống',
      emailadd: 'Địa chỉ Email của bạn',
      enailadderror: 'Email không hợp lệ',
      pass: 'Mật khẩu của bạn',
      passerror: 'Mật khẩu không được để trống hoặc ít hơn 8 ký tự',
      createacc: 'tạo tài khoản',
      or: 'HOẶC',
      returner: 'KHÁCH HÀNG CŨ',
      signinp: 'Nếu bạn đã có tài khoản, hãy nhập email và mật khẩu.',
      uemail: 'Địa chỉ Email',
      uemailerror: 'Email không hợp lệ',
      upass: 'Mật khẩu',
      upasserror: 'Mật khẩu không được để trống hoặc ít hơn 8 ký tự',
      login: 'đăng nhập',
      placeholders: {
        fname: 'Tên',
        lname: 'Họ',
        yemail: 'Địa chỉ Email của bạn',
        ypass: 'Mật khẩu của bạn',
        emailadd: 'Địa chỉ Email',
        passadd: 'Mật khẩu'
      }
    },
    accountPage: {
      head: 'TÀI KHOẢN CỦA TÔI',
      orderhis: 'LỊCH SỬ ĐƠN HÀNG',
      order: 'đơn hàng',
      date: 'ngày',
      paymentstat: 'trạng thái thanh toán',
      fulfillment: 'trạng thái thực hiện',
      total: 'tổng',
      emptyhistory: 'Bạn chưa có đơn hàng nào.',
      contbrowsing: 'Tiếp tục mua sắm',
      here: 'tại đây'
    },
    information: {
      aboutus: {
        head: 'VỀ CHÚNG TÔI',
        text1:
          'Hiep Mobile là cửa hàng bán điện thoại uy tín tại Đà Nẵng, chuyên cung cấp các dòng điện thoại chính hãng từ các thương hiệu hàng đầu.',
        text2:
          'Chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng cao, dịch vụ tận tâm và giá cả hợp lý. Tại Hiep Mobile, bạn sẽ tìm thấy các dòng điện thoại mới nhất, phụ kiện đi kèm và các dịch vụ sửa chữa chuyên nghiệp.',
        text3:
          'Xem video này để hiểu thêm về chúng tôi và cách chúng tôi phục vụ khách hàng.'
      },
      contactus: {
        head: 'LIÊN HỆ VỚI CHÚNG TÔI',
        haveaq:
          'Bạn có câu hỏi hay góp ý? Vui lòng sử dụng mẫu dưới đây để gửi tin nhắn hoặc liên hệ với chúng tôi qua thư:',
        yname: 'Tên của bạn',
        yphone: 'Số điện thoại',
        yemail: 'Email của bạn',
        ycomment: 'Bình luận của bạn',
        submit: 'gửi liên hệ',
        storeinfo: 'THÔNG TIN CỬA HÀNG',
        storeinfop1: 'Chúng tôi luôn muốn lắng nghe bạn - vui lòng sử dụng',
        storeinfop2: 'mẫu để gửi tin nhắn hoặc góp ý.',
        storeinfop3: 'Hoặc ghé thăm để thưởng thức trà và bánh:',
        storeinfop4: 'cookie:',
        storeinfop5: 'Địa chỉ: 1 abc, Đà Nẵng City,',
        storeinfop6: 'XYZ',
        storeinfop7: 'Email: EMAIL',
        storeinfop8: 'Điện thoại: 002-01123399345',
        storeinfop9: 'Giờ mở cửa:',
        storeinfop10: 'Chủ nhật đến thứ Năm: 12h trưa - 12h đêm',
        storeinfop11: 'Thứ Sáu: 1h chiều - 12h đêm'
      },
      termsofserv: {
        head: 'Điều khoản dịch vụ'
      },
      refundpol: {
        head: 'Chính sách hoàn tiền'
      }
    },
    ui: {
      basesidebar: {
        close: 'ĐÓNG'
      },
      editex: {
        prodoptions: 'tùy chọn sản phẩm',
        editquan: 'Số lượng:',
        editcolor: 'Màu sắc:',
        editsize: 'Kích thước:',
        addtocart: 'thêm vào giỏ hàng'
      },
      popup: {
        added: 'đã được thêm vào giỏ hàng của bạn.',
        continueshopping: 'tiếp tục mua sắm',
        gotocart: 'đến giỏ hàng'
      },
      thanky: {
        confirmed: 'Đơn hàng của bạn đã được xác nhận',
        confp: 'Bạn sẽ nhận được email khi đơn hàng sẵn sàng để nhận.',
        btn: 'tiếp tục mua sắm'
      }
    },
    errorAndNote: {
      collectionPage: {
        yoursearch1: 'KẾT QUẢ TÌM KIẾM CHO ',
        yoursearch2: ' ĐÃ HIỂN THỊ NHƯ SAU:',
        nodata1: 'Xin lỗi, bạn chưa thêm sản phẩm nào vào danh sách yêu thích',
        nodata2: 'Xin lỗi, không có sản phẩm nào trong bộ sưu tập này',
        nodata3: 'Xin lỗi, không có sản phẩm nào phù hợp với tìm kiếm',
        dataerror: 'đã xảy ra lỗi'
      },
      accountPage: {
        loadorder: 'tải đơn hàng thất bại'
      },
      header: {
        loadSpinLangError: 'đổi ngôn ngữ gặp lỗi',
        logoutError: 'đăng xuất gặp lỗi'
      },
      store: {
        mainStore: {
          responsefiled: 'không thể tải sản phẩm'
        },
        authModule: {
          signupfiled: 'Đã xảy ra lỗi, vui lòng thử lại sau',
          signinfiled: 'Email hoặc mật khẩu không đúng, vui lòng thử lại'
        },
        ordersModule: {
          setorderfiled: 'gửi đơn hàng thất bại',
          fetchordersfiled: 'lấy đơn hàng thất bại'
        }
      }
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  messages
})

export default i18n
