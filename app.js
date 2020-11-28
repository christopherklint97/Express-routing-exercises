/** Express routing exercises. */

const express = require('express');
const { mean, median, mode } = require('./helpers')
const ExpressError = require("./expressError");
const app = express();

app.use(express.json());
// use the router middleware

// mean route handler
app.get('/mean', function (req, res, next) {
    try {
        let nums = req.query.nums;
        if (!nums) throw new ExpressError('nums are required', 400);
        let numsArr = nums.split(',');

        for (let n of numsArr) {
            if (typeof n !== 'number') throw new ExpressError(`${n} must be a number`, 400);
        }

        return res.json({
            operation: 'mean',
            value: mean(numsArr)
        });
    } catch (err) {
        return next(err);
    }

});

// median route handler
app.get('/median', function (req, res, next) {
    try {
        let nums = req.query.nums;
        if (!nums) throw new ExpressError('nums are required', 400);
        let numsArr = nums.split(',');

        for (let n of numsArr) {
            if (typeof n !== 'number') throw new ExpressError(`${n} must be a number`, 400);
        }

        return res.json({
            operation: 'median',
            value: median(numsArr)
        });
    } catch (err) {
        return next(err);
    }
});

// mode route handler
app.get('/mode', function (req, res, next) {
    try {
        let nums = req.query.nums;
        if (!nums) throw new ExpressError('nums are required', 400);
        let numsArr = nums.split(',');

        for (let n of numsArr) {
            if (typeof n !== 'number') throw new ExpressError(`${n} must be a number`, 400);
        }

        return res.json({
            operation: 'mode',
            value: mode(numsArr)
        });
    } catch (err) {
        return next(err);
    }
});

// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
});

// generic error handler
app.use(function (err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;

    // set the status and alert the user
    return res.status(status).json({
        error: { message, status }
    });
});
// end generic handler
app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});
// end app.listen
