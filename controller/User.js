var mongoose = require('mongoose');
var userDB = mongoose.model('user');
var user_detailsDB = mongoose.model('user_details');
var formidable = require('formidable')


module.exports = {



    insert: function(req, res) {
        var form = new formidable.IncomingForm()
        form.parse(req, function(err, fields, files) {

            var userObj = new userDB({
                message    : fields.plain,
                Subject     : fields['headers[Subject]'],
                email_id      : req.body.email_id,
                password      : req.body.password
            })
       

    userObj.save(function(err) {
            if(err) {
                return res.status(500).json({ status: false, message: 'Database error'})
            } else {

                console.log(fields['headers[Subject]']) 
                



             return res.status(200).json({ status: true, message: 'Inserted', data: userObj })


             
            }
        })
    })
}
}





































// { plain: 'ljkkbkjgjkh\n',
//   html: '<div dir="ltr">ljkkbkjgjkh</div>\n',
//   reply_plain: '',
//   'headers[Received][0]': 'by mail-lf0-f49.google.com with SMTP id y14-v6so36697557lfy.12        for <f8238718989d5fb7f5f4@cloudmailin.net>; Sun, 06 May 2018 07:47:57 -0700',
//   'headers[Received][1]': 'by 10.46.157.216 with HTTP; Sun, 06 May 2018 07:47:56 -0700',
//   'headers[Date]': 'Sun, 06 May 2018 20:17:56 +0530',
//   'headers[From]': 'Harris George <harrisgeorge202@gmail.com>',
//   'headers[To]': 'f8238718989d5fb7f5f4@cloudmailin.net',
//   'headers[Message-ID]': '<CADq=rzPjeX8i7PGwhB73b4H5gZNTsDD=xQGpA1+pK_VuFST_hA@mail.gmail.com>',
//   'headers[Subject]': 'mkjhgvjfgjh',
//   'headers[Mime-Version]': '1.0',
//   'headers[DKIM-Signature]': 'v=1; a=rsa-sha256; c=relaxed/relaxed;        d=gmail.com; s=20161025;        h=mime-version:from:date:message-id:subject:to;        bh=W7zbxDE130caf4MhseC+4AZOgS5jVAnD3Oqfqvg5OyU=;        b=uLhkjzr7tefhEKB+COcouKF5zGurYEfSYMCrl8MZHPMA8MHE3KQ7+NgrY9LfDrti0M         0TAN8hQlVRYSEu3guh+LJpT7wB86JdEvAZfHIQJDHW9Gbj4zxIexL5s03fQxdLUZe0bW         9lxP04nvzRN8AqUxHEfrctaxAsQ6ptyBoYoiXERhS4fGbVd5Cx7+VBkflKjouDNwv4P1         w/FEkrZDgampbCovVKxDAGWIYt0xd9RZ6sE3ifYLiUIKJZN9zbdNG4v6voA687AfFISc         Ie3/YZQJBcGP+v5A7xDrSN1GtWqw5hZuD5+xHioCEQOxTvQAZt76cVgKmoQsKVbLFDzz         Kf9g==',
//   'headers[X-Google-DKIM-Signature]': 'v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20161025;        h=x-gm-message-state:mime-version:from:date:message-id:subject:to;        bh=W7zbxDE130caf4MhseC+4AZOgS5jVAnD3Oqfqvg5OyU=;        b=sOQGiqN19ffInOshunxiHipZgL/c38DaKXg4rYR//hUtevh1VF3FAJV1RH9qtNiOAB         Ci+4H41b9Tu3Ot2wGoQP20Bj8mZzhos0xbZYSg6VErQ0LHwJFQ+cpPR+i29RVuCJhS3f         Z1FZ/IUfcRBBgr3j0ivdipUkIhr+CxyLeyV9mvKwdA47ZmJhTS+gnxS7UFMncHdNUHgz         nGFYglvwrzWjUylQaktJ5xaiMqRspKFuRCiDENhN4/GtASraMxUvgtMlci+22G9fZKnU         8DYyZRl1wa2ygGBjZGO7SiWiJQZtMSChsZiClo60qPoniG1IC2K+hWFOlQ3G3G77EglP         TZNQ==',
//   'headers[X-Gm-Message-State]': 'ALQs6tAbZEwHL2MR/VTd48kXgJ546eDPaDVv7+tCuwYnLDrVy75HwXdu\tGCTiXHqkdtG3oJX24Xc0vrU2f125IiOm62Q2cqXeBQ==',
//   'headers[X-Google-Smtp-Source]': 'AB8JxZpzYam3ddNrJapoLdE63Rqmsmh63oXSpz+qJoe1lSjBDZQLklrDg81foFr5u60RSlfmkSzjIuHRZVi0CbjDrFM=',
//   'headers[X-Received]': 'by 2002:a2e:634e:: with SMTP id x75-v6mr16864002ljb.140.1525618076784; Sun, 06 May 2018 07:47:56 -0700 (PDT)',
//   'envelope[to]': 'f8238718989d5fb7f5f4@cloudmailin.net',
//   'envelope[recipients][0]': 'f8238718989d5fb7f5f4@cloudmailin.net',
//   'envelope[from]': 'harrisgeorge202@gmail.com',
//   'envelope[helo_domain]': 'mail-lf0-f49.google.com',
//   'envelope[remote_ip]': '209.85.215.49',
//   'envelope[tls]': 'true',
//   'envelope[spf][result]': 'neutral',
//   'envelope[spf][domain]': 'gmail.com' }
