---
sidebar_position: 8
---

# 枚举 Enum

枚举类型的概念在许多编程语言中都有出现（大多数源自 Algol 的语言，包括 Pascal、C、C++、C#和 Java，以及其他常见的语言如 Swift、FORTRAN、Lisp、Typescript，还有任何具有代数类型的函数式语言）。

(还好学过 TS！)

Java 实现枚举的方式是使用 **Enum 类** (简称 Enum，是一个特殊的类)。

枚举类型可以独立声明，也可以声明在类内部（您可能想要尝试在何处声明它们以及谁能访问它们）

基础非常简单，但由于它们的实现方式，它们具有令人惊讶的深度（特别是与 C 等其他语言相比）。

## 语法

Java 枚举类使用 enum 关键字来声明，各个常量使用逗号 `,` 来分割。

它可以有一个名称(就像类名一样)，然后是一组`花括号 { }`包裹，里面是一个可能为空的，使用逗号分隔的不同值的名称列表，以`分号 ;`结尾。

```Java
enum <name> { value1, value2, ..., valueN; }
```

一个例子

```Java
enum Color
{
    RED, GREEN, BLUE;
}

private enum Value { ACE, TEN, JACK, QUEEN, KING; }
```

### Class 内部声明

Enum 也可以声明在内部类中

```Java 
public class Test
{
    enum Color
    {
        RED, GREEN, BLUE;
    }
}
```

## 访问

枚举的值使用语法 `<name>.<value_name>` 访问，类似于在类中访问字段的方式。

```Java 
public class Test
{
    enum Color
    {
        RED, GREEN, BLUE;
    }
 
    public static void main(String[] args)
    {
        // correct next line
        Color c1 = Color.RED;
        System.out.println(c1);
    }
}
```

## 深入枚举类

在 Java 中，枚举被实现为一种特殊类型的类。也就是说我们可以把它看成一种 Class，内部有固定的，预声明的 Obj(也就是那些 value)

也正因此，你不需要构造函数，因为你不能创建更多（或更少）的 Obj，但你也恰好有这些实例，这意味着你也可以直接使用相等比较，所以与大多数对象不同，这段代码可以按照你可能天真地期望的方式工作：

```Java
enum Example { <fill in some values here>; }

Example e1 = ...
Example e2 = ...

if (e1 == e2) {
    //blah blah
}
```

这是因为对于枚举，`.equals` 的结果与比较引用相同，这就是 `==` 与对象执行的操作，因为你不能有两个相同的枚举值的副本！

由于枚举是类，你还可以向它们添加方法和某些类型的字段！回到牌组的例子，我们可以将一些代码移到更合适的位置：

```Java
import java.util.Random;
import java.util.Arrays;

public class Deck {

    //Two enums to express the possible cards. NOW WITH METHODS!!!
    private enum Suit {

        HEARTS, SPADES, DIAMONDS, CLUBS;

        @Override
        public String toString() {
            return switch (this) { //What am I?
                case HEARTS -> "♥";
                case SPADES -> "♤";
                case DIAMONDS -> "♦";
                case CLUBS -> "♧";
            };
        }
    }

    private enum Value {

        ACE, TEN, JACK, QUEEN, KING;

        @Override
        public String toString() {
            return switch (this) {
                case ACE -> "A";
                case TEN -> "10";
                case JACK -> "J";
                case QUEEN -> "Q";
                case KING -> "K";
            };
        }

    }


    private record Card(Suit suit, Value value){
        @Override
        public String toString() {
            //Now this one is a lot simpler:
            return this.value.toString() + this.suit.toString();
        }
    }
    private final Random rand;
    private final Card[] deck;

    public Deck() {
        this.rand = new Random(System.currentTimeMillis());
        deck = new Card[Suit.values().length * Value.values().length];
        int i = 0;
        for (Suit s : Suit.values()) {
            for (Value v : Value.values()) {
                deck[i++] = new Card(s, v);
            }
        }
    }

    public void shuffle() {
        for (int i = 0; i < this.deck.length; i++) {
            int randIndex = this.rand.nextInt(this.deck.length);
            Card temp = this.deck[i];
            this.deck[i] = this.deck[randIndex];
            this.deck[randIndex] = temp;
        }
    }

    @Override
    public String toString() {
        return Arrays.toString(this.deck);
    }

    public static void main(String[] args) {
        Deck deck = new Deck();
        System.out.println("Check that all the cards are there: ");
        System.out.println(deck);
        deck.shuffle();
        System.out.println("Now we can shuffle them: ");
        System.out.println(deck);
    }

}
```

在这里我们不会深入讨论示例（特别是声明具有常量的枚举），但请记住你可以这样做。

作为一个特殊的应用，你可以通过将所需的单例类作为枚举来在 Java 中实现单例模式 - 然后不仅仅是类的一个实例，这由编译器保证。 你不需要进行任何复杂的检查，或者控制对构造函数的访问或任何其他操作 - 除了确切地一个类的实例外，没有其他任何可能。
