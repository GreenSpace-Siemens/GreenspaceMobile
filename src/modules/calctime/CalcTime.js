import firestore from '@react-native-firebase/firestore';

function CalcTime(date) {
    const dayOfYear = date => {
        return Math.floor(
            (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24,
        );
    };

    const now = firestore.Timestamp.now().toDate();
    const today = {
        year: now.getFullYear(),
        month: now.getMonth(),
        day: dayOfYear(now),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
    };

    const postingDate = date.toDate();
    const posting = {
        year: postingDate.getFullYear(),
        month: postingDate.getMonth(),
        day: dayOfYear(postingDate),
        hours: postingDate.getHours(),
        minutes: postingDate.getMinutes(),
        seconds: postingDate.getSeconds(),
    };

    let diff = 0;
    if (today.year !== posting.year) {
        diff = today.year - posting.year;
        return `${diff} year${diff > 1 ? 's' : ''}`;
    } else if (today.month !== posting.month) {
        diff = today.month - posting.month;
        return `${diff} month${diff > 1 ? 's' : ''}`;
    } else if (today.day !== posting.day) {
        diff = today.day - posting.day;
        return `${diff} day${diff > 1 ? 's' : ''}`;
    } else if (today.hours !== posting.hours) {
        diff = today.hours - posting.hours;
        return `${diff} hour${diff > 1 ? 's' : ''}`;
    } else if (today.minutes !== posting.minutes) {
        diff = today.minutes - posting.minutes;
        return `${diff} minute${diff > 1 ? 's' : ''}`;
    } else {
        diff = today.seconds - posting.seconds;
        return `${diff} second${diff > 1 ? 's' : ''}`;
    }
}

export default CalcTime;
