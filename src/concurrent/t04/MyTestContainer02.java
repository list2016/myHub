package concurrent.t04;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

/**
 * @ClassName MyTestContainer02
 * @Author lisongtao
 * @Date 2020/12/30 15:23
 **/
public class MyTestContainer02<E> {

    private final List<E> container = new ArrayList<>();
    private final int MAX_LENGTH = 10;
    private final int MIN_LENGTH = 0;

    private Lock lock = new ReentrantLock();
    private Condition consumer = lock.newCondition();
    private Condition producer = lock.newCondition();

    public void add(E string) {
        lock.lock();
        try {
            System.out.println(Thread.currentThread().getName() + "---------start-" + string);
            // 若容器已经到达最大度
            while (container.size() == MAX_LENGTH) {
                System.out.println(Thread.currentThread().getName() + " 等待。。。");
                producer.await();
            }

            System.out.println(Thread.currentThread().getName() + " put 。。。");
            // 若没到最大长度
            container.add(string);
            consumer.signalAll();
            System.out.println(Thread.currentThread().getName() + "---------end-" + string);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            lock.unlock();
        }
    }


    public E get() {
        E string = null;
        lock.lock();
        try {
            System.out.println(Thread.currentThread().getName() + "---------start");

            // 1、若容器长度为0 不再进行消费，进入等待

            while (container.size() == MIN_LENGTH) {
                System.out.println(Thread.currentThread().getName() + " 等待。。。");
                consumer.await();
            }


            // 2、若容器内的长度大于0 ，进行消费，并且唤醒所有的线程，主要为了唤醒生产者，进行添加数据
            string = container.get(0);
            container.remove(0);
            producer.signalAll();
            System.out.println(Thread.currentThread().getName() + "---------end");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            lock.unlock();
        }
        return string;
    }


    public static void main(String[] args) {
        final MyTestContainer02<String> c = new MyTestContainer02<>();
        for (int i = 0; i < 10; i++) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    for (int j = 0; j < 5; j++) {
                        System.out.println(c.get());
                    }
                }
            }, "consumer" + i).start();
        }
        try {
            TimeUnit.SECONDS.sleep(2);
        } catch (InterruptedException e1) {
            e1.printStackTrace();
        }
        for (int i = 0; i < 2; i++) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    for (int j = 0; j < 25; j++) {
                        c.add("container value " + j);
                    }
                }
            }, "producer" + i).start();
        }
    }


}
