Classy Taxi: Google Play Billing Subscriptions Server Sample
=====================================================

This is the Node.js server that manages subscriptions for the ClassyTaxi
[Android](https://github.com/android/play-billing-samples/tree/master/ClassyTaxiAppKotlin) and
[web](https://github.com/android/play-billing-samples/tree/master/ClassyTaxiAppWeb) app.

![Classy Taxi animation GIF showing subscription features of Google Play Billing](../ClassyTaxiAppKotlin/classy_taxi_animation.gif)

# Deploy Backend Server

**Before deploying the backend server, you should make sure you've completed the steps to
[setup the Play Developer Console](https://github.com/android/play-billing-samples/tree/master/ClassyTaxiAppKotlin#play-developer-console-setup).**

1. Make sure you have installed Node.js, npm, and Firebase CLI

    * [https://firebase.google.com/docs/cli/](https://firebase.google.com/docs/cli/)

1. Run `npm install` to install dependencies

1. Configure Cloud Functions for Firebase with your Android app and subscription products

    ```
       firebase use --add {your_firebase_project_id}

       firebase functions:config:set app.package_name="your_android_application_id"

       //firebase functions:config:set app.basic_plan_sku="basic_subscription"

       //firebase functions:config:set app.premium_plan_sku="premium_subscription"
       
       firebase functions:config:set app.basic_plan_sku="eatms_basic_3mth_subscription"

       firebase functions:config:set app.premium_plan_sku="eatms_premium_3mth_subscription"
    ```

1. Install Node packages

    ```
        cd {project_folder}/ClassyTaxiServer
        npm install
    ```

1. Run `firebase deploy` to deploy your backend to Cloud Functions for Firebase

---my notes ---


Firebase cloud function

`install nodes, rpm,firebasecli`

`firebase login`

//playstore project
cp service-account.json to src/

```
firebase use --add estate-and-tenant-manager

//android app id in project

firebase functions:config:set app.package_name="io.mtini.android.tenantmanager.pro"

firebase functions:config:set app.basic_plan_sku="eatms_base_price"

 firebase functions:config:set app.premium_plan_sku="eatms_premium_price"

//firebase functions:config:set app.basic_subscription_plan_sku="eatms_basic_3mth_subscription"

 //firebase functions:config:set app.premium_subscription_plan_sku="eatms_premium_3mth_subscription"

firebase functions:config:set app.basic_plan_sku="eatms_basic_3mth_subscription"

 firebase functions:config:set app.premium_plan_sku="eatms_premium_3mth_subscription"
```
//go to IAM Admin in console
//go to Service Accounts
//select service (eatms-pro-firebasefunctions-pr….), there should be one store in workspace peek dir
//create key as json or p12
// copy to project  src dir 
//then build
`npm run build`
//or
//build and verify lib/ has service-account.json
 `npm run-script build`

//then deploy
`firebase deploy --only functions`
