//library to add colours to the console
import chalk from 'chalk';

export default class Logging {
    // some static loggin function
    // every log shall have the current daytime attached
    // add [INFO] as declaration that its an info log statement
    // if its a string its gonna be blue, if not it console.logs the actual args
    public static log = (args: any) => this.info(args);

    public static info = (args: any) => console.log(chalk.blue(`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? chalk.blueBright(args) : args);

    public static warn = (args: any) => console.log(chalk.blue(`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? chalk.yellowBright(args) : args);

    public static error = (args: any) => console.log(chalk.blue(`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? chalk.redBright(args) : args);
}
