function century(year) {
    return year % 100 == 0 ? year / 100 : (year / 100 >> 0) + 1;
} 