package concurrent.t04;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * @ClassName MyTestContainer01
 * @Author lisongtao
 * @Date 2020/12/30 14:45
 **/
public class MyTestContainer01<E> {

    private final List<E> container = new ArrayList<>();
    private final int MAX_LENGTH = 10;
    private final int MIN_LENGTH = 0;

    /**
     * 生产者 添加数据
     *
     * @param string
     * @return void
     * @Author: lisongtao
     * @Date: 2020/12/30
     */
    public synchronized void add(E string) {
        System.out.println("producer-"+Thread.currentThread().getName() + "---------start-"+string);
        System.out.println(container.size());
        // 若容器已经到达最大度
        while (container.size() == MAX_LENGTH) {
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        // 若没到最大长度
        this.container.add(string);
        this.notifyAll();
        System.out.println("producer-"+Thread.currentThread().getName() + "---------end-"+string);
    }


    /**
     * 消费者删除数据
     *
     * @Author: lisongtao
     * @Date: 2020/12/30
     */
    public synchronized E get() {

        System.out.println("consumer-"+Thread.currentThread().getName() + "---------start");
        System.out.println(container.size());

        // 1、若容器长度为0 不再进行消费，进入等待

        while (container.size() == MIN_LENGTH) {
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }


        // 2、若容器内的长度大于0 ，进行消费，并且唤醒所有的线程，主要为了唤醒生产者，进行添加数据
        E string = container.get(0);
        container.remove(0);
        this.notifyAll();
        System.out.println("consumer-"+Thread.currentThread().getName() +  "---------end");
        return string;
    }


    public static void main(String[] args) {

        final MyTestContainer01<String> myTestContainer01 = new MyTestContainer01<>();

        // 等待10个消费者
        for (int i = 0; i < 10; i++) {
            new Thread(() -> {
                myTestContainer01.get();
            }, "consumer-" + i).start();
        }

        // 等待2秒钟
        try {
            TimeUnit.SECONDS.sleep(2);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // 加入5个生产者
        for (int i = 0; i < 5; i++) {
            new Thread(() -> {
                for (int j = 0; j < 25; j++) {
                    myTestContainer01.add("container value " + j);
                }
            }, "producer-" + i).start();
        }

    }


}
