class User_controller {
    async registration(req, res){

    };

    async login(req, res){

    };

    async check(req, res){
        res.send('check')
    };
};

module.exports = new User_controller().check;