// multiplier can be 0, so checking undefined instead of !multiplier
const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier === undefined) {
        return value * 2;
    } else{
        return value * multiplier;
    }
}

const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        value = value.trimStart();
        value = value.trimEnd();
        return value.toLowerCase();
    } else if (typeof value === "number") {
        return value * 10;
    }else {
        return value ? "Active" : "Inactive";
    }
}

// readonly so the tuple can't be changed inside
const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const result: T[] = [];
    for (const arr of arrays) {
        result.push(...arr);
    }
    return result;
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

// filter gives a new array, original stays same
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
}

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item) => item[key]);
}

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    // name is protected so we can use it here
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        // reject right away, no need to wait
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}
