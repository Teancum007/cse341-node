exports.loadPlanets = (req, res, next) => {
    const items = new jdata();
    items.getProducts((err, data) => {
        if (err) {
            console.log('File could not be read.');
            res.end();
        } else {
            const itemsData = JSON.parse(data);
            res.render('pages/planetStore', { 
                title: 'Buy a Planet!', 
                path: '/planetStore', // For pug, EJS 
                //activeTA03: true, // For HBS
                //contentCSS: true, // For HBS
                itemsData: itemsData
            });
        }
    });
};