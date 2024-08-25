function getGrade(s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3;

    switch (average) {
        case average < 60:
            return "F";
        case average < 70:
            return "D";
        case average < 80:
            return "C";
        case average < 90:
            return "B";
        default:
            return "A";
    }
}