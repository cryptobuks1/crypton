/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /':'HomepageController.homepage',
  'GET /login':'LoginController.login',
  'GET /signup':'SignupController.signup',
  'POST /register':'RegisterController.register',
  'GET /dashboard':'DashboardController.dashboard',
  'GET /logout':'LogoutController.logout',
  'POST /signin':'SigninController.signin',
  'POST /transactions':'TransactionsController.transactions',
  'GET /createoffer':'CreateofferController.createoffer',
  'GET /walletbtc':'WalletbtcController.walletbtc',
  'GET /walletbch':'WalletbchController.walletbch',
  'GET /walleteth':'WalletethController.walleteth',
  'GET /walletltc':'WalletltcController.walletltc'


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
