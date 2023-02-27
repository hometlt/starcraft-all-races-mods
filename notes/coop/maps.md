
## Maps Tempalating

#### OLD
```
🎯Player Start [<Teammates>-]<Player>
🎯Amon Start [<Teammates>-]<Player>

🌐
🌐
🌐

```

#### New

🎯 - Start Point
📍 - Point
🌐 - Region

**Team**: Ally|Amon

**Player**: 1-5

**Teammates**: 1-5

**Wave**: Wave|Evil

**Squad**: Base|Outpost|Squad

**Collide**: Ground|Air

**Difficulty**: Peaceful|Casual|Normal|Hard|Brutal|Extreme|Unlikely

**Size**: Smallest|Saller|Small|Medium|Large|Larger|Largest

**Tech**: Lowest|Lower|Low|Middle|High|Higher|Highest
Amon-1 Squad 4 (Largest-Highest-Air)

```
🌐Team-P Reveal Index (Mode)
🎯Ally-P Start Index (Mode)
🎯Ally-P Expansion Index (Mode)
📍Wave N-W
📍Evil N-W
⇉Team-P Squad <Index> (Difficulty-Size-Tech-Collide)
⇉Team-P Outpost <Index> (Difficulty-Size-Tech-Collide)
⇉Team-P Base <Index> (Difficulty-Size-Tech-Collide)

🌐Team-P Clear Index (Mode)      //🌐Ally Clear (2)
🌐Team-P Base Index (Mode)
```

Belshir Escort
```
🌐BE Reveal
🌐BE Geyser N
📍BE Park N
BE Spawn
BE Path N-W
BE Spot N
```
Belshir Whales
```
🌐BW Area N
🌐BW Reveal N
BW Spawn
```

### Maps development 
1. сделать переменными ( убрать constant checkbox)
 PLAYER_01_USER = 1 <Integer>
 PLAYER_02_USER = 2 <Integer>

2. в Init 03 Players инициализировать игрока 1 и 2
        Variable -Set PLAYER_01_USER = (Player 1 from (Get Allied Commanders Players()))
        General -If (Conditions) then do (Actions) else do (Actions)
            If
                (Number of players in (Get Allied Commanders Players())) > 1
            Then
                Variable -Set PLAYER_02_USER = (Player 2 from (Get Allied Commanders Players()))
            Else
                Variable -Set PLAYER_02_USER = PLAYER_01_USER (изменено)

3. изменить игроков 3/4/5(пример из miner ecacuation) 
   PLAYER_03_AMON_Claimers = 13 <Integer (Constant)>
   PLAYER_04_AMON_BaseWaves = 14 <Integer (Constant)>
   PLAYER_05_INFESTED_Bullies/Holdout/NeutralToss = 12 <Integer (Constant)>

 оставить загрузку только для игроков 1-5

4. убедится что удален триггер "defeat base dead"

5. Run Victory / Run Defeat нужно убедится что используются Victory/Defeat из модуля Mission(COOP)

 меняешь владельца предстуановленных юнитов игроков 3-5

Player Start 1 - Player Start 5

6. установить точки старта игроков

точки старта амуна Amon Start 1 - Amon Start 2

точка старта игрока будет Player Start <количество игроков>-<номер игрока>, а если нет Player Start <номер игрока> (изменено)

точка старта игрока за Амуна будет Amon Start <количество игроков за амуна>-<номер игрока>, а если нет Amon Start <номер игрока>
НОВОЕ

Optional Zone 1      -    Optional Zone 5    опциональные ресы, юниты для определенного количества игроков командиров

Optional Zone 2-1      Optional Zone 2-2     опициональные ресы для определенного количества игроков амуна

иногда удобно использовать Clear Zone <колво игроков> чтобы удалить ресы

Safety Zone - безопасная о мутаторов зона при любом колве игроков
Safety Zone 1    -     Safety Zone 5     - дополнительные безопасные зоны при конкретном количестве игроков
при игре на 1 . либо 1 экспаншен либо 2 если они в разных сторонах , при игре на 4 игроков одна из экспаншенов амуна будет появлятся. при игре на 5 оба экспаншена амуна .
Initial Exploration [<колво игроков>]    это зона на которой иргоки видят где их экспаншены

при желании предустановить юнитов здания для трех стандартных рас (теры , протоссы зерги )
тут есть список типов предустанавливаемых юнитов COOPAIReplacement
Изображение
ситоит проверить на картах что все юниты заменяются
Изображение
"Doodads Replacement Area"
удалить refinery/assimilators/extractors и рабочих амуна
а еще на основные базы амуна с минералами добавь защитников. например парочку доминаторов)
Изображение
Изображение
Evil <номер маршрута>-<точка на маршруте>
Evil 1-1  , Evil 1-2    -  первый маршрут
Evil 2-1, Evil 2-2  - второй маршрут
Амун - red и dark red

amon neutral - желтый и оранжевый
спицифичные - розовый и фиолетовый 


