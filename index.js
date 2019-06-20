function logDriverNames(drivers) {
    drivers.forEach(function(driver) {
        console.log(driver.name);
    });
};

function logDriversByHometown(drivers, location) {
    drivers.forEach(function(driver) {
        if (driver.hometown === location) {
            console.log(driver.name);
        };
    });
};

function driversByRevenue(drivers) {
    return [...drivers].sort(function(a, b) {
        return a.revenue - b.revenue;
    });
};

function driversByName(drivers) {
    return [...drivers].sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
};


const reduceDriverRevenue = function(agg, driver, i, drivers) {
    return agg + driver.revenue;
};

function totalRevenue(drivers) {
    return drivers.reduce(reduceDriverRevenue, 0);
};

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
};