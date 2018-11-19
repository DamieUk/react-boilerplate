// import { Action } from 'redux'
// import { Observable } from 'rxjs'
//
// import { DashboardActions } from 'pages/dashboard/actions';
//
// const activateUserEpic = (action$: Action) =>
//     action$.ofType(DashboardActions.getInfoRequest.request)
//         .switchMap(action =>
//             Observable.fromPromise(api.Auth.activate(action.payload))
//                 .switchMap(user =>
//                     Observable.concat(
//                         Observable.of(userActivate.success(user.token)),
//                         Observable.of(register())
//                     )
//                 )
//                 .catch(err => Observable.of(userActivate.failure(err.error)))
//         )
//
// export default [
//     activateUserEpic
// ]

export default [];