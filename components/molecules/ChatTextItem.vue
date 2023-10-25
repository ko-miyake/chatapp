<template>
    <div>
        <div>
            <BaseIcon class="shrink-0">
                <slot name="image"><img src="https://placehold.jp/150x150.png"/></slot>
            </BaseIcon>
            <slot name="name"><span>name</span></slot>

        </div>
        <div>
            <BaseChatText>
                <slot name="text">samleText</slot>
            </BaseChatText> 
        </div>

    </div>

</template>