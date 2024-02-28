---
sidebar_position: 4
---

# 单元测试

Unit testing 是软件开发中的重要部分。

单元测试是一种测试方法，通过测试程序的各个组件来（部分地）评估软件的正确性。

在现代编程语言中，这些个体组件就是方法（或其等价物）。方法为程序的其余部分提供了清晰的接口，具有明确定义的输入和输出。方法被视为一个黑盒子，因此如何实现结果并不重要，重要的是结果是否正确。

这使得可以编写用于测试方法的代码，从而实现更广泛和更全面的测试。

当然，单元测试不是唯一的测试方案，在生产环境中不应单独使用（也不应忽视），但在我们目前工作的水平上，它已经足够完善了。

Java 有一个关联的单元测试框架叫做 [JUnit](https://junit.org/junit5/)，它支持实现可以检查程序单元（方法）功能的自动化测试。Python 有一个名为 [unittest](https://docs.python.org/3/library/unittest.html) 的单元测试库，它随着标准发行版一起打包，并为 Python 扮演了同样的角色。

如果你有兴趣学习更多关于这方面的知识，JUnit（用于 Java）和 unittest（用于 Python）都是免费提供的，并附带有文档。如果你想了解更多关于单元测试在实际应用中如何使用的信息，总是可以从知识的源头开始：[单元测试](https://en.wikipedia.org/wiki/Unit_testing)、[测试驱动开发 Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development)、[持续集成 Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration)。

## 例子

一个 Dr Luke 在使用中的例子，我先贴在这，之后再慢慢研究

```Java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;
import java.lang.ArithmeticException;

public class DivideTest {

	@Test
	public void testOneOne() {
		/** #name(Divide 1 by 1.) */
		Divider divider = new Divider();
		assertEquals(1, divider.divide(1,1), "1 / 1 should result in 1");
	}

	@Test
	public void testOneLarge() {
		/** #name(Divide 1 by things larger than 1.) */
		Divider divider = new Divider();
		for (int i = 2; i < 100; ++i)
			assertEquals(0, divider.divide(1,i), "Case: 1 / " + i);
	}

	@Test
	public void testLargeOne() {
		/** #name(Divide things larger than 1 by 1.) */
		Divider divider = new Divider();
		for (int i = 2; i < 100; ++i)
			assertEquals(i, divider.divide(i,1), "Case: " + i + " / 1");
	}

	@Test
	public void testDivZero() {
		/** #name(Dividing by zero should cause problems.) */
		Divider divider = new Divider();
		assertThrows(ArithmeticException.class, () -> {divider.divide(1, 0);});
	}

	@Test
	public void testNegOne() {
		/** #name(Divide things by -1.) */
		Divider divider = new Divider();
		for (int i = 1; i < 100; ++i)
			assertEquals(-i, divider.divide(i, -1), "Case: " + i + " / -1");
	}

	@Test
	public void testMultiples() {
		/** #name(Divide a * b by b.) */
		Divider divider = new Divider();
		for (int a = 2; a < 100; ++a)
			for (int b = 2; b < 100; ++b)
				assertEquals(a, divider.divide(a * b, b), "Case: " + (a * b) + " / " + b);
	}

}
```
