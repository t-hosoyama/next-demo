#
# マスタ系のデータ投入用のDML定義ファイル
#
USE `next` ;

# テーブルのダンプ sample
# ------------------------------------------------------------
INSERT INTO `list` (`id`, `name`, `image_url`)
VALUES
    (1,'sample1','/sample1'),
    (2,'sample2','/sample2'),
    (3,'sample3','/sample3'),
    (4,'sample4','/sample4'),
    (5,'sample5','/sample5');
