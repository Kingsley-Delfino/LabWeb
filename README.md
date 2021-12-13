## FDSE

### 一、 命名规范

**0. 通用规则**

- 名称只能由字母、数字、下划线、$符号组成

- 不能以数字开头

- 不能使用JAVA中的关键字和保留字

- 不允许出现中文及拼音命名

**1. 包名：尽量一个单词，名词，全部小写**

例：
~~~~
｜——src
    ｜——controller
    ｜——service
    ｜——dao
~~~~
**2. 类名：大驼峰命名法，名词**

**3. 属性名：小驼峰命名法，名词**

**4. 方法名：小驼峰命名法，动词开头，反映实际操作的对象和过程**

**5. 变量名：小驼峰命名法，名词。若为基本数据类型，则反映其作用；若为封装类的对象，则保留其类名，并添加修饰词表明其类别**

**6. 常量名：名词，全部大写，单词中间用下划线间隔**

例：
~~~~
class Person {  //类名
    private String name = new String("");   //属性名
    private int age = 0;   //属性名
    private static final int EYES_NUMBER = 2;   //常量名
    public int addAge(int years) {  //方法名
        if (years >= 0) {
            this.age += years;
        }
        return this.age;
    }
    public static void main(String[] args) {
        List<Person> personList = new ArrayList<>();    //变量名，封装类对象的集合
        Person tomPerson = new Person();    //变量名，封装类的对象
        int newTomAge = tomPerson.addAge(10);   //变量名，基本数据类型
    }
}
~~~~

**7. API：小驼峰命名法，尽量一个单词，尽量名词**

### 二、 注释规范

**1. 类注释**

~~~~
/**
* Copyright (C)
* FileName: 文件名
*
* 类的详细说明
*
* @author 类创建者姓名
* @Date 创建日期
* @version 1.00
*/
~~~~

**2. 属性注释**

~~~~
/** 提示信息 */
~~~~

**3. 方法注释**

~~~~
/**
*
* 类方法的详细使用说明
*
* @param 参数1 参数1的使用说明
* @return 返回结果的说明
* @throws 注明从此类方法中抛出的异常
*/
~~~~

**4. 方法内部注释**

~~~~
//提示信息
~~~~

例：
~~~~
/**
*
* 定义人的类，其中包括姓名、年龄和眼睛的数量，其中眼睛数量为类属性
*
* @author 张纪跃
* @Date 2021年4月21日
* @version 1.00
*/
class Person {

    /** 姓名 */
    private String name = new String("");
    
    /** 年龄 */
    private int age = 0;
    
    /** 眼睛数量 */
    private static final int EYES_NUMBER = 2;
    
    /**
    *
    * 增加年龄
    *
    * @param years 需要增加的年数
    * @return 返回新的年龄
    */
    public int addAge(int years) {
        if (years >= 0) {
            this.age += years;
        }
        return this.age;
    }
    
    public static void main(String[] args) {
        List<Person> personList = new ArrayList<>();
        Person tomPerson = new Person();
        //新的年龄
        int newTomAge = tomPerson.addAge(10);
    }
}
~~~~
